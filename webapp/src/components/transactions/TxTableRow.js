import React, { useReducer, useState } from 'react'
import { string, bool, number, shape } from 'prop-types'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import LinkIcon from '@mui/icons-material/Link'
import CloseIcon from '@mui/icons-material/Close'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { EditableField, EditableCheckboxField } from '../editableField'
import { formReducer } from '../../reducers/formReducer'
import UpdateTransaction from '../../gql/mutations/updateTransaction.gql'
import DeleteTransaction from '../../gql/mutations/deleteTransaction.gql'
import GetTransaction from '../../gql/transactions.gql'
import css from '@emotion/css'
import { toRomanNumeral } from '../../utils/roman-numerals'

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

const styles = css`
  &:last-child td, &:last-child th {
    border: none;
  }
`
export function TxTableRow ({ data }) {
  const { id, user, userId, merchantId, description, merchant, debit, credit, amount } = data
  const [isEditing, setIsEditing] = useState(false)
  const [format, setFormat] = useState('normal')

  const [fields, dispatch] = useReducer(formReducer, {
    'description': { name: 'description', value: description, error: false },
    'debit': { name: 'debit', value: debit, error: false },
    'credit': { name: 'credit', value: credit, error: false },
    'amount': { name: 'amount', value: amount, error: false },
    'merchantId': { name: 'merchantId', value: merchantId, error: false }
  })

  const [updateTransaction] = useMutation(UpdateTransaction)
  const [deleteTransaction] = useMutation(DeleteTransaction, {
    variables: {
      id
    },
    refetchQueries: [{
      query: GetTransaction
    }]
  })

  function handleEditClick () {
    setIsEditing(true)
  }

  function handleDeleteClick () {
    deleteTransaction()
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
          inputProps={{
            sx: { textAlign: 'right' },
            onDoubleClick: handleAmountDoubleClick,
            title: getAmountTitle()
          }}
          onChange={({ target: { value } }) =>
            setValue('amount', value)
          }
          value={formatCurrency(fields.amount.value)}
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
    </TableRow >
  )
}

const rowActionStyle = css`
  display: flex;
`

function RowActions ({ isEditing, onEditClick, onDeleteClick, onCancelClick, onSaveClick }) {
  if (!isEditing) {
    return (
      <div css={rowActionStyle}>
        <IconButton onClick={onEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  } else {
    return (
      <div css={rowActionStyle}>
        <IconButton onClick={onCancelClick}>
          <CloseIcon />
        </IconButton>
        <IconButton onClick={onSaveClick}>
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
  })
}
