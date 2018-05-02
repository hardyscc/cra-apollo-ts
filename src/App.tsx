import * as React from 'react'
import { Query } from 'react-apollo'
import { GetStocks as QUERY } from './queries'
import { GetStocksQuery } from './__generated__/types'

class StocksQuery extends Query<GetStocksQuery> {}

export const App = () => (
  <StocksQuery query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error :(</div>

      return (
        <div>
          Stocks :
          <ul>
            {data &&
              data.stocks.map(stock => (
                <li key={stock.code}>
                  {stock.code} {stock.name}
                </li>
              ))}
          </ul>
        </div>
      )
    }}
  </StocksQuery>
)
