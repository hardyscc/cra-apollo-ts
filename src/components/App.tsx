import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from 'antd'
import AppMenu from './AppMenu'
import { StockList } from './stock/StockList'
import BeerListContainer from './beer/BeerListContainer'
import Test from './test/Test'

import './App.css'

export default () => (
  <Router>
    <Layout>
      <Layout.Header>
        <AppMenu />
      </Layout.Header>
      <Layout.Content className="content-box">
        <Route path="/" exact={true} component={StockList} />
        <Route path="/beer" component={BeerListContainer} />
        <Route path="/test" component={Test} />
      </Layout.Content>
    </Layout>
  </Router>
)
