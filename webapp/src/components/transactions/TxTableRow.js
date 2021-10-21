import React, { useReducer, useState } from 'react'
import { string, bool, number, shape, func } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import LinkIcon from '@mui/icons-material/Link'
import { Link } from 'react-router-dom'
import { EditableField, EditableCheckbox } from '../editableField'
import { formReducer, formActions } from '../../reducers/formReducer'
import css from '@emotion/css'
import { toRomanNumeral } from '../../utils/roman-numerals'
import { RowActions } from '../rowActions/rowActions'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

function formatCurrency (format, num) {
  if (format === 'roman') {
    return toRomanNumeral(num)
  } else {
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  }
}

const styles = css`
  &:last-child td, &:last-child th {
    border: none;
  }
`

export function TxTableRow ({ data, onUpdate, onDelete }) {
  const { id, user, description, merchant, debit, credit, amount } = data
  const [isEditing, setIsEditing] = useState(false)
  const [format, setFormat] = useState('numbers')

  const [fields, dispatch] = useReducer(formReducer, {
    'description': { name: 'description', value: description },
    'debit': { name: 'debit', value: debit },
    'credit': { name: 'credit', value: credit },
    'amount': { name: 'amount', value: amount },
    'merchantId': { name: 'merchantId', value: merchant.id }
  })

  function handleEditClick () {
    setIsEditing(true)
  }

  function handleCancelClick () {
    setIsEditing(false)
  }

  function handleDeleteClick () {
    if (typeof onDelete === 'function') {
      onDelete()
    }
  }

  function handleSaveClick () {
    setIsEditing(false)

    if (typeof onUpdate === 'function') {
      onUpdate({
        id,
        userId: user.id,
        merchantId: merchant.id,
        description: fields.description.value,
        debit: fields.debit.value,
        credit: fields.credit.value,
        amount: Number(fields.amount.value)
      })
    }
  }

  function setValue (field, value) {
    dispatch({ type: formActions.SET_FIELD_VALUE, field, value })
  }

  function handleAmountDoubleClick () {
    if (format === 'roman') {
      setFormat('numbers')
    } else {
      setFormat('roman')
    }
  }

  function getAmountTitle () {
    if (isEditing) {
      return ''
    } else {
      if (format === 'roman') {
        return 'Double click to see numbers'
      } else {
        return 'Double click to see roman numerals'
      }
    }
  }

  return (
    <TableRow
      css={styles}
      data-testid='tx-table-row'
    >
      <TableCell data-testid={makeDataTestId(id, 'id')}>
        <div>
          <Link to={`/transactions/${id}`}><LinkIcon /></Link>
        </div>
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'user')}>
        <div>{`${user.firstName} ${user.lastName}`}</div>
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'description')}>
        <EditableField
          editing={isEditing}
          onChange={({ target: { value } }) =>
            setValue('description', value)
          }
          value={fields.description.value}
        />
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'merchant')}>
        <div>{merchant.name}</div>
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'debit')}>
        <EditableCheckbox
          editing={isEditing}
          onChange={({ target: { checked } }) =>
            setValue('debit', checked)
          }
          value={fields.debit.value}
        />
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'credit')}>
        <EditableCheckbox
          editing={isEditing}
          onChange={({ target: { checked } }) =>
            setValue('credit', checked)
          }
          value={fields.credit.value}
        />
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'amount')}>
        <EditableField
          editing={isEditing}
          inputProps={{
            sx: { textAlign: 'right' },
            onDoubleClick: handleAmountDoubleClick,
            title: getAmountTitle(),
            type: isEditing ? 'number' : 'text'
          }}
          onChange={({ target: { value } }) =>
            setValue('amount', value)
          }
          value={
            isEditing
              ? fields.amount.value
              : formatCurrency(format, Number(fields.amount.value))
          }
        />
      </TableCell>

      <TableCell data-testid={makeDataTestId(id, 'actions')}>
        <RowActions
          isEditing={isEditing}
          onCancelClick={handleCancelClick}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
          onSaveClick={handleSaveClick}
        />
      </TableCell>
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
  }),
  onUpdate: func,
  onDelete: func
}
