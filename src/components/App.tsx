import * as React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { StockList } from './stock/StockList'
import BeerListContainer from './beer/BeerListContainer'

import './App.css'

export default () => (
  <Router>
    <Layout>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal" className="menu-box">
          <Menu.Item key="1">
            <Link to="/">Stock List</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/beer">Beer List</Link>
          </Menu.Item>
        </Menu>
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
