// importa a dependência fastify
import Fastify from 'fastify'
// cria o objeto fastify
const server = Fastify()
// importa a dependência prisma
import {PrismaClient} from '@prisma/client'
// cria o objeto prisma
const prisma = new PrismaClient()


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

// vamos subir o servidor
server.listen({
    port: 3333
})
.then (() => {
    console.log('HTTP Server running and listening on port 3333')
})