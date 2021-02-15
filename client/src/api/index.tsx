import {ApolloClient, InMemoryCache} from '@apollo/client'
import {WebSocketLink} from '@apollo/client/link/ws'

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WS_LINK!,
  options: {
    reconnect: true
  }
})

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  link: wsLink
})

export * from './generated'

export default client
