import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TxTableRowContainer } from './TxTableRow-container'

export function TxTable ({ data }) {
  return (
    <TableContainer component={Paper} data-testid='transaction-table'>
      <Table aria-label='transaction table'>
        <TableHead>
          <TableRow>
            <TableCell padding='checkbox' />
            <TableCell>User</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Merchant</TableCell>
            <TableCell>Debit</TableCell>
            <TableCell>Credit</TableCell>
            <TableCell align='right'>Amount</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((tx) => (
            <TxTableRowContainer data={tx} key={`transaction-${tx.id}`} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user: shape({
      firstName: string,
      lastName: string
    }),
    description: string,
    merchant: shape({
      name: string
    }),
    debit: bool,
    credit: bool,
    amount: number
  }))
}
