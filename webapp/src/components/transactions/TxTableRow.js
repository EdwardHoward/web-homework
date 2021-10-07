import React, { useReducer, useState } from 'react'
import { string, bool, number, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useMutation } from '@apollo/client'
import { EditableField, EditableCheckboxField } from '../editableField'
import { formReducer } from '../../reducers/formReducer'
import UpdateTransaction from '../../gql/mutations/updateTransaction.gql'
import css from '@emotion/css'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const styles = css`
  &:last-child td, &:last-child th {
    border: none;
  }
`
export function TxTableRow ({ data }) {
  const { id, user, userId, merchantId, description, merchant, debit, credit, amount } = data
  const [isEditing, setIsEditing] = useState(false)

  const [fields, dispatch] = useReducer(formReducer, {
    'description': { name: 'description', value: description, error: false },
    'debit': { name: 'debit', value: debit, error: false },
    'credit': { name: 'credit', value: credit, error: false },
    'amount': { name: 'amount', value: amount, error: false },
    'merchantId': { name: 'merchantId', value: merchantId, error: false }
  })

  const [updateTransaction] = useMutation(UpdateTransaction)

  function handleEditClick () {
    setIsEditing(true)
  }

  function handleSaveClick () {
    setIsEditing(false)

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

  function setValue (field, value) {
    dispatch({ type: 'set_field_value', field, value })
  }

  return (
    <TableRow
      css={styles}
      data-testid='tx-table-row'
    >
      <TableCell align='left' data-testid={makeDataTestId(id, 'id')}>
        <div>
          <Link to={`/transactions/${id}`}>{id}</Link>
        </div>
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'userId')}>
        <div>{`${user.firstName} ${user.lastName}`}</div>
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'description')}>
        <EditableField
          editing={isEditing}
          error={fields.amount.error}
          onChange={({ target: { value } }) =>
            setValue('description', value)
          }
          value={fields.description.value}
        />
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'merchant')}>
        <div>{merchant.name}</div>
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'debit')}>
        <EditableCheckboxField
          editing={isEditing}
          error={fields.amount.error}
          onChange={({ target: { checked } }) =>
            setValue('debit', checked)
          }
          value={fields.debit.value}
        />
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'credit')}>
        <EditableCheckboxField
          editing={isEditing}
          error={fields.amount.error}
          onChange={({ target: { checked } }) =>
            setValue('credit', checked)
          }
          value={fields.credit.value}
        />
      </TableCell>
      <TableCell align='right' data-testid={makeDataTestId(id, 'amount')}>
        <EditableField
          editing={isEditing}
          error={fields.amount.error}
          onChange={({ target: { value } }) =>
            setValue('amount', value)
          }
          value={fields.amount.value}
        />
      </TableCell>

      <TableCell align='right' data-testid={makeDataTestId(id, 'actions')}>
        <RowActions handleEditClick={handleEditClick} handleSaveClick={handleSaveClick} isEditing={isEditing} />
      </TableCell>
    </TableRow >
  )
}

function RowActions ({ isEditing, handleEditClick, handleSaveClick }) {
  if (!isEditing) {
    return <Button onClick={handleEditClick}>Edit</Button>
  } else {
    return <Button onClick={handleSaveClick}>Save</Button>
  }
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
