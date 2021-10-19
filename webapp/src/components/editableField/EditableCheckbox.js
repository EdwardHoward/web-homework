import React from 'react'
import { bool, string, func, oneOfType, number } from 'prop-types'
import { Checkbox } from '@mui/material'

export function EditableCheckboxField ({ value, editing, onChange }) {
  if (editing) {
    return (
      <Checkbox checked={value} onChange={onChange} variant='standard' />
    )
  }

  return <Checkbox checked={value} inputProps={{ readOnly: true }} onChange={onChange} variant='standard' />
}

EditableCheckboxField.propTypes = {
  value: oneOfType([string, bool, number]),
  editing: bool,
  onChange: func
}
