import * as React from 'react'
import { render, wait } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import { App, STOCKS_QUERY } from '../App'

const stocks = [
  { code: '0001.HK', name: '長和' },
  { code: '0002.HK', name: '中電控股' }
]
const request = { query: STOCKS_QUERY }
const result = { data: { stocks } }
const error = new Error('something go wrong')

describe('App', () => {
  it('render', async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[{ request, result }]}>
        <App />
      </MockedProvider>
    )
    await wait(() => getByText('Stocks'))
    expect(container).toMatchSnapshot()
  })

  it('error', async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[{ request, error }]}>
        <App />
      </MockedProvider>
    )
    await wait(() => getByText('Error'))
    expect(container).toMatchSnapshot()
  })
})
