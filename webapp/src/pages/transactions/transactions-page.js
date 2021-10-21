import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../../gql/transactions.gql'
import { TxTable } from '../../components/transactions/TxTable'
import { Query } from '../../components/query/Query'
import { ModalButton } from '../../components/modal/ModalButton'
import { Box } from '@mui/system'
import { TxForm } from '../../components/transactions/TxForm'
import { Grid } from '@mui/material'

export function Transactions () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  return (
    <Box>
      <Query error={error} loading={loading}>
        <Grid container>
          <Grid item xs={12}>
            <TxTable data={data.transactions} />
          </Grid>
        </Grid>
        <ModalButton label='Create New Transaction'>
          <TxForm />
        </ModalButton>
      </Query>
    </Box>
  )
}
