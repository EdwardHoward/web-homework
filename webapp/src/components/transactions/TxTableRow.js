import React from 'react'
import { string, bool, number, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom';

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTableRow ({ data }) {
  const { id, user, description, merchant, debit, credit, amount } = data

  return (
    <TableRow
      data-testid='tx-table-row'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align='left' data-testid={makeDataTestId(id, 'id')}><Link to={`/transactions/${id}`}>{id}</Link></TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'userId')}>{`${user.firstName} ${user.lastName}`}</TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'description')}>{description}</TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'merchant')}>{merchant.name}</TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'debit')}>{debit}</TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'credit')}>{credit}</TableCell>
      <TableCell align='right' data-testid={makeDataTestId(id, 'amount')}>{amount}</TableCell>
    </TableRow>
  )
}

TxTableRow.propTypes = {
  data: shape({
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
  })
}
