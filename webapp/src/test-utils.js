/* eslint-disable import/export */
import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { transactions } from '../mocks/transactions-data'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import GetTransaction from './gql/GetTransaction.gql'
import GetTransactions from './gql/transactions.gql'
import 'regenerator-runtime/runtime'
import { node } from 'prop-types'

const mocks = [
  {
    request: {
      query: GetTransaction
    },
    result: {
      data: {
        transaction: transactions[0]
      }
    }
  },
  {
    request: {
      query: GetTransactions
    },
    result: {
      data: {
        transactions: transactions
      }
    }
  }
]

const Providers = ({ children }) => (
  <MemoryRouter>
    <MockedProvider addTypename={false} mocks={mocks}>
      {children}
    </MockedProvider>
  </MemoryRouter>
)

Providers.propTypes = {
  children: node
}

const customRender = (
  ui,
  options
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
