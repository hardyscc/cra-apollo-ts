import * as React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { GetStocksQuery } from '../__generated__/types'
import { Button } from 'antd'

class StocksQuery extends Query<GetStocksQuery> {}

export const STOCKS_QUERY = gql`
  query GetStocks {
    stocks(type: EQTY, first: 10, skip: 0) {
      code
      name
    }
  }
`

export const App = () => (
  <StocksQuery query={STOCKS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <div>
          <h4>Stocks :</h4>
          <ul>
            {data &&
              data.stocks.map(stock => (
                <li key={stock.name}>
                  {stock.code} {stock.name}
                </li>
              ))}
          </ul>
          <Button type="primary">Test</Button>
        </div>
      )
    }}
  </StocksQuery>
)
