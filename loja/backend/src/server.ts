// importa a dependência fastify
import Fastify from 'fastify'
// cria o objeto fastify
const server = Fastify() // dependência para criar um servidor HTTP
// importa a dependência prisma
import {PrismaClient} from '@prisma/client'
// cria o objeto prisma
const prisma = new PrismaClient() // ORM para conectar com SQLite
// importa a dependência ZOD
import {z} from 'zod'

// vamos criar nossa primeira rota 
// vamos usar o verbo GET - consulta
server.get('/hello', () => {
    return 'Boa noite, hoje tem jogo do Golden State'
})

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

// vamos subir o servidor
server.listen({
    port: 3333
})
.then (() => {
    console.log('HTTP Server running and listening on port 3333')
})