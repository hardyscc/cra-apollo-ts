import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { StockList } from './stock/StockList'
import BeerListContainer from './beer/BeerListContainer'
import AppMenu from './AppMenu'

import './App.css'

export default () => (
  <Router>
    <Layout>
      <Layout.Header>
        <AppMenu />
      </Layout.Header>
      <Layout.Content>
        <div className="content-box">
          <Route path="/" exact={true} component={StockList} />
          <Route path="/beer" component={BeerListContainer} />
        </div>
      </Layout.Content>
    </Layout>
  </Router>
)
