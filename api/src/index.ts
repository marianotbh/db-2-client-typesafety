import 'reflect-metadata'
import {ApolloServer} from 'apollo-server'
import {buildSchema} from 'type-graphql'
import {TodosResolver} from './resolvers/todos.resolver'
import {createConnection} from 'typeorm'
import {config} from 'dotenv'
import {RedisPubSub} from 'graphql-redis-subscriptions'

config()

export async function bootstrap() {
  const {PORT, REDIS_HOST, REDIS_PORT} = process.env

  await createConnection()

  const pubSub = new RedisPubSub({
    connection: {
      host: REDIS_HOST,
      port: Number(REDIS_PORT)
    }
  })

  const schema = await buildSchema({
    resolvers: [TodosResolver],
    dateScalarMode: 'isoDate',
    pubSub
  })

  const server = new ApolloServer({
    schema,
    playground: true,
    tracing: true,
    introspection: true,
    cors: {origin: '*'}
  })

  await server.listen(PORT)

  console.log(`Server listening on port ${PORT}`)
}

bootstrap()
