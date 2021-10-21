import React from 'react'
import { string, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import LinkIcon from '@mui/icons-material/Link'
import { Link } from 'react-router-dom'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function MerchantTableRow ({ data }) {
  const { id, name } = data

  return (
    <TableRow
      data-testid='merchant-table-row'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell data-testid={makeDataTestId(id, 'id')}>
        <div>
          <Link to={`/merchants/${id}`}>
            <LinkIcon />
          </Link>
        </div>
      </TableCell>
      <TableCell data-testid={makeDataTestId(id, 'name')}>{name}</TableCell>
    </TableRow>
  )
}

MerchantTableRow.propTypes = {
  data: shape({
    id: string,
    name: string
  })
}
