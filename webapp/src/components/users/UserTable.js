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
import { UserTableRow } from './UserTableRow'

const styles = css`
  min-width: 650px;
  max-width: 720px;
`

export function UserTable ({ data }) {
  return (
    <TableContainer component={Paper} css={styles} data-testid='user-table'>
      <Table aria-label='user table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='left'>First Name</TableCell>
            <TableCell align='left'>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <UserTableRow data={user} key={`user-${user.id}`} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

UserTable.propTypes = {
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
