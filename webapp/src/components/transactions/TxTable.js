import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TxTableRow from './TxTableRow'

const styles = css`
  min-width: 650px;
  max-width: 720px;
`

export function TxTable ({ data }) {
  return (
    <TableContainer component={Paper} css={styles}>
      <Table aria-label='transaction table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='left'>User</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'>Merchant</TableCell>
            <TableCell align='left'>Debit</TableCell>
            <TableCell align='left'>Credit</TableCell>
            <TableCell align='right'>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tx) => (
            <TxTableRow data={tx} key={`transaction-${tx.id}`} />
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
