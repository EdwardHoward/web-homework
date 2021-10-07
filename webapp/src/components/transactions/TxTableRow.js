import React, { useReducer, useState } from 'react'
import { string, bool, number, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useMutation } from '@apollo/client'
import { EditableField, EditableCheckboxField } from '../editableField';
import { formReducer } from '../../reducers/formReducer';
import UpdateTransaction from '../../gql/mutations/updateTransaction.gql'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTableRow({ data }) {
  const { id, user, userId, merchantId, description, merchant, debit, credit, amount } = data

  console.log(credit, debit);
  const [isEditing, setIsEditing] = useState(false);

  const [fields, dispatch] = useReducer(formReducer, {
    'description': { name: 'description', value: description, error: false },
    'debit': { name: 'debit', value: debit, error: false },
    'credit': { name: 'credit', value: credit, error: false },
    'amount': { name: 'amount', value: amount, error: false },
    'merchantId': { name: 'merchantId', value: merchantId, error: false }
  });

  const [updateTransaction] = useMutation(UpdateTransaction);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    setIsEditing(false);

    // do mutation
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

  return (
    <TableRow
      data-testid='tx-table-row'
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
        <EditableField editing={isEditing} value={fields.description.value} error={fields.amount.error}
          onChange={({ target: { value } }) =>
            dispatch({ type: 'set_field_value', field: 'description', value })}
        />
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'merchant')}>
        <div>{merchant.name}</div>
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'debit')}>
        <EditableCheckboxField editing={isEditing} value={fields.debit.value} error={fields.amount.error}
          onChange={({ target: { checked } }) =>
            dispatch({ type: 'set_field_value', field: 'debit', value: checked })}
        />
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'credit')}>
        <EditableCheckboxField editing={isEditing} value={fields.credit.value} error={fields.amount.error}
          onChange={({ target: { checked } }) =>
            dispatch({ type: 'set_field_value', field: 'credit', value: checked })}
        />
      </TableCell>
      <TableCell align='right' data-testid={makeDataTestId(id, 'amount')}>
        <EditableField editing={isEditing} value={fields.amount.value} error={fields.amount.error}
          onChange={({ target: { value } }) =>
            dispatch({ type: 'set_field_value', field: 'amount', value })}
        />
      </TableCell>
      <TableCell align='right' data-testid={makeDataTestId(id, 'actions')}>
        <RowActions isEditing={isEditing} handleEditClick={handleEditClick} handleSaveClick={handleSaveClick} />
      </TableCell>
    </TableRow>
  )
}

function RowActions({ isEditing, handleEditClick, handleSaveClick }) {
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
