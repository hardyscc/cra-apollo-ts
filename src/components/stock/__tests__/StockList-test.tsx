import * as React from 'react'
import { render, wait } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { StockList, STOCKS_QUERY } from '../StockList'

const stocks = [
  {
    __typename: 'Stock',
    code: '0001.HK',
    lotSize: 50,
    name: '長和',
    status: 'Active'
  },
  {
    __typename: 'Stock',
    code: '0002.HK',
    lotSize: 100,
    name: '中電控股',
    status: 'Active'
  }
]
const request = { query: STOCKS_QUERY }
const result = { data: { stocks } }
const error = new Error('something go wrong')

describe('App', () => {
  it('render', async () => {
    const { container, getByTestId } = render(
      <MockedProvider mocks={[{ request, result }]}>
        <StockList />
      </MockedProvider>
    )
    await wait(() => getByTestId('stock-list'))
    expect(container).toMatchSnapshot()
  })

  it('error', async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[{ request, error }]}>
        <StockList />
      </MockedProvider>
    )
    await wait(() => getByText('Error!'))
    expect(container).toMatchSnapshot()
  })
})
