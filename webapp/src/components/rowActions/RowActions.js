import React from 'react'
import { css } from '@emotion/core'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import SaveIcon from '@mui/icons-material/Save'
import { bool, func } from 'prop-types'

const rowActionStyle = css`
  display: flex;
  justify-content: center;
`

export function RowActions ({ isEditing, onEditClick, onDeleteClick, onCancelClick, onSaveClick }) {
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

RowActions.propTypes = {
  isEditing: bool,
  onEditClick: func,
  onDeleteClick: func,
  onCancelClick: func,
  onSaveClick: func
}
