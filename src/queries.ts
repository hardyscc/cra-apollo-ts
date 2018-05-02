import { gql } from 'apollo-boost'

export const GetStocks = gql`
  query GetStocks {
    stocks(type: EQTY, first: 10, skip: 0) {
      code
      name
    }
  }
`
