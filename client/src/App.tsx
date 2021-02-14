import React from 'react'
import {ApolloProvider} from '@apollo/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {Toaster} from 'react-hot-toast'
import graphQLClient from './api'
import store from './store'
import Routes from './routes'

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ApolloProvider client={graphQLClient}>
            <Routes />
          </ApolloProvider>
        </BrowserRouter>
      </Provider>
      <Toaster position="bottom-right" />
    </React.StrictMode>
  )
}
