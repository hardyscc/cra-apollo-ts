import * as React from 'react'
import { Query } from 'react-apollo'
import { List } from 'antd'
import { gql } from 'apollo-boost'
import { GetStocksQuery } from '../../__generated__/types'

class StocksQuery extends Query<GetStocksQuery> {}
type Stock = GetStocksQuery['stocks'][0]

export const STOCKS_QUERY = gql`
  query GetStocks {
    stocks(type: EQTY, first: 10, skip: 0) {
      code
      name
    }
  }
`

const renderItem = (stock: Stock) => (
  <List.Item>
    {stock.code} {stock.name}
  </List.Item>
)

export const StockList = () => (
  <StocksQuery query={STOCKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <List
          data-testid="stock-list"
          bordered={true}
          dataSource={data && data.stocks}
          renderItem={renderItem}
        />
      )
    }}
  </StocksQuery>
)
