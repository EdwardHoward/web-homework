import React from 'react'
import { bool, string, func } from 'prop-types'
import { Checkbox, TextField } from '@mui/material'

export function EditableField ({ value, editing, onChange }) {
  if (editing) {
    return (
      <TextField data-testid="editable-field-editing" onChange={onChange} value={value} variant='standard' />
    )
  }

  return <TextField data-testid="editable-field-static" InputProps={{ disableUnderline: true, readOnly: true }} onChange={onChange} value={value} variant='standard' />
}

EditableField.propTypes = {
  value: string,
  editing: bool,
  onChange: func
}

export function EditableCheckboxField ({ value, editing, onChange }) {
  if (editing) {
    return (
      <Checkbox checked={value} onChange={onChange} variant='standard' />
    )
  }

  return <Checkbox checked={value} inputProps={{ readOnly: true }} onChange={onChange} variant='standard' />
}

EditableCheckboxField.propTypes = {
  value: string,
  editing: bool,
  onChange: func
}
