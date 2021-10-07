import React from 'react'
import { string, bool, number, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom';

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function UserTableRow ({ data }) {
  const { id, lastName, firstName } = data

  return (
    <TableRow
      data-testid='user-table-row'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align='left' data-testid={makeDataTestId(id, 'id')}><Link to={`/transactions/${id}`}>{id}</Link></TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'firstName')}>{firstName}</TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'lastName')}>{lastName}</TableCell>
    </TableRow>
  )
}

UserTableRow.propTypes = {
  data: shape({
    id: string,
    firstName: string,
    lastName: string
  })
}
