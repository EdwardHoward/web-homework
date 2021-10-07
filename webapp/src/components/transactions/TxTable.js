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
import { TxTableRow } from './TxTableRow'

const styles = css`
  min-width: 650px;
  max-width: 75%;

  .MuiTableCell-head {
    background: #e0e0e0;
    border-right: 1px solid #c9c9c9;
  }

  .MuiTableCell-head:last-child {
    border-right: none;
  }

  .Mui-disabled {
    color: black;
  }
`

export function TxTable({ data, updateTransaction, createTransaction }) {
  const [updateTransaction] = useMutation(UpdateTransaction);

  function handleSaveClick() {
    updateTransaction({
      variables: {
        id,
        userId,
        merchantId,
        description: fields.description.value,
        debit: fields.debit.value,
        credit: fields.credit.value,
        amount: Number(fields.amount.value)
      }
    })
  }

  function handleCreateClick() {
    createTransaction({
      variables: {
        id,
        userId,
        merchantId,
        description: fields.description.value,
        debit: fields.debit.value,
        credit: fields.credit.value,
        amount: Number(fields.amount.value)
      }
    })
  }

  return (
    <TableContainer component={Paper} css={styles} data-testid='transaction-table'>
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
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((tx) => (
            <TxTableRow data={tx} key={`transaction-${tx.id}`} onSave={handleUpdateClick} />
          ))}
          <TxTableRow data={{
            id: null,
            user: null,
            userId: null,
            merchantId: null,
            description: "",
            merchant: null,
            debit: false,
            credit: false,
            amount: null
          }} onSave={handleCreateClick}/>
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
