/* eslint-disable import/export */
import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { transactions } from '../mocks/transactions-data'
import { users } from '../mocks/users-data'
import { merchants } from '../mocks/merchants-data'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'
import GetTransaction from './gql/GetTransaction.gql'
import GetTransactions from './gql/transactions.gql'
import GetUsers from './gql/users.gql'
import GetMerchants from './gql/merchants.gql'
import updateTransactionMutation from './gql/mutations/updateTransaction.gql'
import 'regenerator-runtime/runtime'
import { node } from 'prop-types'

const mocks = [
  {
    request: {
      query: GetTransaction,
      variables: {
        id: '5d5c1f747e01cd704f18f863'
      }
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
        transactions
      }
    }
  },
  {
    request: {
      query: GetUsers
    },
    result: {
      data: {
        users
      }
    }
  },
  {
    request: {
      query: GetMerchants
    },
    result: {
      data: {
        merchants
      }
    }
  },
  {
    request: {
      query: updateTransactionMutation,
      variables: {
        id: '5d5c1f747e01cd704f18f863',
        userId: '0',
        merchantId: '0',
        description: 'change test',
        debit: false,
        credit: true,
        amount: 150
      }
    },
    response: {
      id: '5d5c1f747e01cd704f18f863',
      userId: '0',
      merchantId: '0',
      description: 'change test',
      debit: false,
      credit: true,
      amount: 150
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
