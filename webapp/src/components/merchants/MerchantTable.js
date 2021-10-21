import React from 'react'
import { arrayOf, string, shape } from 'prop-types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { MerchantTableRow } from './MerchantTableRow'

export function MerchantTable ({ data }) {
  return (
    <TableContainer component={Paper} data-testid='merchants-table'>
      <Table aria-label='merchants table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='left'>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((merchant) => (
            <MerchantTableRow data={merchant} key={`merchant-${merchant.id}`} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

MerchantTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    name: string
  }))
}
