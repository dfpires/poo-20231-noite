// importa a dependência fastify
import Fastify from 'fastify'
// cria o objeto fastify
const server = Fastify() // dependência para criar um servidor HTTP
// importa a dependência prisma
import {PrismaClient} from '@prisma/client'
// cria o objeto prisma
const prisma = new PrismaClient() // ORM para conectar com SQLite

// vamos subir o servidor
server.listen({
    port: 3333
})
.then (() => {
    console.log('HTTP Server running and listening on port 3333')
})