import {z} from 'zod'
import {prisma} from './lib/prisma'
import { FastifyInstance } from 'fastify'

export async function AppRoutes(server: FastifyInstance) {
    // rota para consultar todos os produtos no banco de dados
    // como vai consultar BD, a função tem que ser assíncrona
    server.get('/products', async () => {
        // await aguarda a resposta do BD
        const products = await prisma.product.findMany()
        return products
    })

    // rota para consultar os produtos que iniciam a descrição com uma palavra
    // enviada pelo frontend (na variável request)
    server.get('/product/:description', async (request) => {
        // precisamos utilizar um esquema de tipo de dados para tratar tipo recebido do usuário
        // dependência ZOD
        // criando o objeto ZOD para a descrição
        const descriptionParam = z.object({
            description: z.string()
        })
        // obtem o valor de description no parâmetro da rota
        const {description} = descriptionParam.parse(request.params)
        // faz a consulta no banco de dados
        // select * from product where description = %description
        const product = prisma.product.findMany({
            where: {
                description: {
                    startsWith: description
                }
            }
        })
        return product
    })

    // cria rota para inserir produto
    server.post('/product', async (request) => {
            // cria objeto zod para definir esquema de dados do frontend
            const productBody = z.object({
                description: z.string(),
                price: z.number(),
                quantity: z.number()
            })
            // recupera os dados do frontend
            const {description, price, quantity} = productBody.parse(request.body)
            // insere o produto no banco de dados
            const newProduct = prisma.product.create({
                data: {
                    description: description,
                    price: price,
                    quantity: quantity,
                    created_at: new Date()
                }
            })
            return newProduct
    })

    // altera a quantidade do produto a partir de uma compra
    server.patch('/product/compra', async (request) => {
        // cria objeto zod
        const compraBody = z.object({
            id: z.string().uuid(),
            quantity: z.number()
        })
        // recupera dados do frontend
        const {id, quantity} = compraBody.parse(request.body)
        // atualiza o quantity
        const productUpdated = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                quantity: {
                    increment: quantity
                }
            }
        })
        return productUpdated
    })

    // venda de produto
    server.patch('/product/venda', async (request) => {
        // cria objeto zod para recuperar os dados
        const vendaBody = z.object({
            id: z.string().uuid(),
            quantity: z.number()
        })
        // recupera os dados do frontend
        const {id, quantity} = vendaBody.parse(request.body)
        // atualiza o estoque do produto vendido
        const resp = await prisma.product.updateMany({
            where: {
                id: id,
                quantity: {
                    gte: quantity
                }
            },
            data: {
                quantity: {
                    decrement: quantity
                }
            }
        })
        if (resp.count >= 1){
            return 'Venda realizada'
        }
        else {
            return 'Estoque insuficiente'
        }
    })

    // rota para atualizar um produto
    server.put('/product/id/:id', async (request) => {
        // objeto zod para o id
        const idParam = z.object({
            id: z.string().uuid()
        })
        // objeto zod para o body
        const putBody = z.object({
            description: z.string(),
            quantity: z.number(),
            price: z.number()
        })
        // recupera dados do frontend com o params
        const {id} = idParam.parse(request.params)
        // recupera dados do frontend com o body
        const {description, quantity, price} = putBody.parse(request.body)
        // atualiza o produto no banco de dados
        const productUpdated = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                description,
                quantity,
                price
            }
        })
        return productUpdated
    })

    // rota para remover um produto
    server.delete('/product/id/:id', async (request) => {
        // objeto zod para o id
        const idParam = z.object({
            id: z.string().uuid()
        })
        // recupera dados do frontend com o params
        const {id} = idParam.parse(request.params)
        // remove do banco de dados
        const productRemoved = await prisma.product.delete({
            where: {
                id
            }
        })
        return productRemoved
    })

}