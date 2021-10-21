import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes'
import { ApolloProvider } from '@apollo/client'
import { client } from './network/apollo-client'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  .MuiTableCell-head {
    background: black;
    color: white;
    border-right: 1px solid #c9c9c9;
  }

  .MuiTableCell-head:last-child {
    border-right: none;
  }

  .Mui-disabled {
    color: black;
  }
`

ReactDOM.render(
  (
    <div data-app-init=''>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <AppRouter />
      </ApolloProvider>
    </div>
  ),
  document.getElementById('react-app')
)
