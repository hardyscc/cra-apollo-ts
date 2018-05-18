import * as React from 'react'
import { Query } from 'react-apollo'
import { Table } from 'antd'
import { gql } from 'apollo-boost'
import { GetStocksQuery } from '../../__generated__/types'

class StocksQuery extends Query<GetStocksQuery> {}

export const STOCKS_QUERY = gql`
  query GetStocks {
    stocks(type: EQTY, first: 100, skip: 0) {
      code
      name
      lotSize
      status
    }
  }
`

export const StockList = () => (
  <StocksQuery query={STOCKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <div data-testid="stock-list">
          <Table dataSource={data && data.stocks} size="small">
            <Table.Column title="Code" dataIndex="code" key="code" />
            <Table.Column title="Name" dataIndex="name" key="name" />
            <Table.Column title="Lot Size" dataIndex="lotSize" key="lotSize" />
            <Table.Column title="Status" dataIndex="status" key="status" />
          </Table>
        </div>
      )
    }}
  </StocksQuery>
)
