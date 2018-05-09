import * as React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const client = new ApolloClient({ uri: 'https://portfolios.now.sh/' })

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
registerServiceWorker()
