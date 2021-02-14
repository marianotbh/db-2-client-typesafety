import 'reflect-metadata'
import {ApolloServer} from 'apollo-server'
import {buildSchema} from 'type-graphql'
import {TodosResolver} from './resolvers/todos.resolver'
import {createConnection} from 'typeorm'
import {config} from 'dotenv'

config()

export async function bootstrap() {
  const {PORT} = process.env

  console.log('hey')

  await createConnection()

  const schema = await buildSchema({
    resolvers: [TodosResolver],
    dateScalarMode: 'isoDate'
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
