import { css } from '@emotion/core'
import { Button, Modal, Paper } from '@mui/material'
import React, { useState } from 'react'

const modalStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    box-shadow: 24px;
    padding: 2rem;
`

export function ModalButton ({ label, children }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen} sx={{ my: { xs: 2 } }} variant='contained'>{label}</Button>
      <Modal
        onClose={handleClose}
        open={open}
      >
        <Paper css={modalStyle} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} variant='outlined'>
          {children}
        </Paper>
      </Modal>
    </>
  )
}
