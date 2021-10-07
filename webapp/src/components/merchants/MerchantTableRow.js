import React from 'react'
import { string, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function MerchantTableRow ({ data }) {
  const { id, name } = data

  return (
    <TableRow
      data-testid='merchant-table-row'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align='left' data-testid={makeDataTestId(id, 'id')}><Link to={`/merchants/${id}`}>{id}</Link></TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'name')}>{name}</TableCell>
    </TableRow>
  )
}

MerchantTableRow.propTypes = {
  data: shape({
    id: string,
    name: string
  })
}
