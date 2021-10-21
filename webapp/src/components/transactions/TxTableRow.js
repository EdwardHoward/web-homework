import React, { useReducer, useState } from 'react'
import { string, bool, number, shape, func } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import LinkIcon from '@mui/icons-material/Link'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'
import { EditableField, EditableCheckbox } from '../editableField'
import { formReducer } from '../../reducers/formReducer'
import css from '@emotion/css'
import { toRomanNumeral } from '../../utils/roman-numerals'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const styles = css`
  &:last-child td, &:last-child th {
    border: none;
  }
`
export function TxTableRow ({ data, onUpdate, onDelete }) {
  const { id, user, description, merchant, debit, credit, amount } = data
  const [isEditing, setIsEditing] = useState(false)
  const [format, setFormat] = useState('normal')

  const [fields, dispatch] = useReducer(formReducer, {
    'description': { name: 'description', value: description, error: false },
    'debit': { name: 'debit', value: debit, error: false },
    'credit': { name: 'credit', value: credit, error: false },
    'amount': { name: 'amount', value: amount, error: false },
    'merchantId': { name: 'merchantId', value: merchant.id, error: false }
  })

  function handleEditClick () {
    setIsEditing(true)
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

  function handleCancelClick () {
    setIsEditing(false)
  }

  function setValue (field, value) {
    dispatch({ type: 'set_field_value', field, value })
  }

  function formatCurrency (num) {
    if (isEditing) {
      return num
    } else {
      if (format === 'roman') {
        return toRomanNumeral(num)
      } else {
        return num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      }
    }
  }

  function handleAmountDoubleClick () {
    if (format === 'roman') {
      setFormat('number')
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
      <TableCell align='left' data-testid={makeDataTestId(id, 'id')}>
        <div>
          <Link to={`/transactions/${id}`}><LinkIcon /></Link>
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
        <EditableCheckbox
          editing={isEditing}
          error={fields.amount.error}
          onChange={({ target: { checked } }) =>
            setValue('debit', checked)
          }
          value={fields.debit.value}
        />
      </TableCell>
      <TableCell align='left' data-testid={makeDataTestId(id, 'credit')}>
        <EditableCheckbox
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
          inputProps={{
            sx: { textAlign: 'right' },
            onDoubleClick: handleAmountDoubleClick,
            title: getAmountTitle(),
            type: isEditing ? 'number' : 'text'
          }}
          onChange={({ target: { value } }) =>
            setValue('amount', value)
          }
          value={formatCurrency(Number(fields.amount.value))}
        />
      </TableCell>

      <TableCell align='right' data-testid={makeDataTestId(id, 'actions')}>
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

const rowActionStyle = css`
  display: flex;
`

function RowActions ({ isEditing, onEditClick, onDeleteClick, onCancelClick, onSaveClick }) {
  if (!isEditing) {
    return (
      <div css={rowActionStyle}>
        <IconButton aria-label='Edit' onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete' onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  } else {
    return (
      <div css={rowActionStyle}>
        <IconButton aria-label='Cancel' onClick={onCancelClick}>
          <CloseIcon />
        </IconButton>
        <IconButton aria-label='Save' onClick={onSaveClick}>
          <SaveIcon />
        </IconButton>
      </div>
    )
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
  }),
  onUpdate: func,
  onDelete: func
}
