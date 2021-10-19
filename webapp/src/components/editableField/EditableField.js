import React from 'react'
import { bool, string, func, oneOfType, number, object } from 'prop-types'
import { TextField } from '@mui/material'

export function EditableField ({ value, editing, onChange, inputProps }) {
  if (editing) {
    return (
      <TextField data-testid='editable-field-editing' inputProps={inputProps} onChange={onChange} value={value} variant='standard' />
    )
  }

  return <TextField InputProps={{ disableUnderline: true, readOnly: true }} data-testid='editable-field-static' inputProps={inputProps} onChange={onChange} value={value} variant='standard' />
}

EditableField.propTypes = {
  editing: bool,
  inputProps: object,
  onChange: func,
  value: oneOfType([string, bool, number])
}
