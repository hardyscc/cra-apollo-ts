import * as React from 'react'
import { Query } from 'react-apollo'
import { Table } from 'antd'
import { gql } from 'apollo-boost'
import { GetStocksQuery } from './__generated__/GetStocksQuery'

export const getStocksQuery = gql`
  query GetStocksQuery {
    stocks(type: EQTY, first: 100, skip: 0) {
      code
      name
      lotSize
      status
    }
  }
`

export const StockList = () => (
  <Query<GetStocksQuery> query={getStocksQuery}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error!</div>

      return (
        <div data-testid="stock-list">
          <Table dataSource={data && data.stocks} rowKey="code" size="small">
            <Table.Column title="Code" dataIndex="code" key="code" />
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Lot Size" dataIndex="lotSize" key="lotSize" />
            <Table.Column title="Status" dataIndex="status" key="status" />
          </Table>
        </div>
      )
    }}
  </Query>
)
