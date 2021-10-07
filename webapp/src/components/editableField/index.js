import React from 'react';
import { Checkbox, TextField } from '@mui/material';

export function EditableField({ value, editing, onChange }) {
  if (editing) {
    return (
      <TextField onChange={onChange} value={value} variant="standard" />
    )
  }

  return <TextField onChange={onChange} value={value} variant="standard" InputProps={{ disableUnderline: true, readOnly: true }} />;
}

export function EditableCheckboxField({ value, editing, onChange }) {
  if (editing) {
    return (
      <Checkbox onChange={onChange} checked={value} variant="standard" />
    )
  }

  return <Checkbox onChange={onChange} checked={value} variant="standard" inputProps={{ readOnly: true }} />;
}