import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './components/App'
import BeerListContainer from './components/BeerListContainer'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const client = new ApolloClient({ uri: 'https://portfolios.now.sh/' })

const WrappedApp = (
  <ApolloProvider client={client}>
    <Router>
      <React.Fragment>
        <Route path="/" exact={true} component={App} />
        <Route path="/beer" component={BeerListContainer} />
      </React.Fragment>
    </Router>
  </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
registerServiceWorker()
