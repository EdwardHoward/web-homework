import React from 'react'
import { Button, Checkbox, Divider, FormControlLabel, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { func } from 'prop-types'
import { MerchantDropdown } from '../merchants/MerchantDropdown'
import { UserDropdown } from '../users/UserDropdown'
import { css } from '@emotion/core'
import { useForm } from '../../hooks/useForm'
import { useTransactionActions } from '../../hooks/useTransactions'

function defaultFields () {
  return {
    'userId': { name: 'userId', value: '', error: false },
    'description': { name: 'description', value: '', error: false },
    'debit': { name: 'debit', value: false, error: false },
    'credit': { name: 'credit', value: false, error: false },
    'amount': { name: 'amount', value: '', error: false },
    'merchantId': { name: 'merchantId', value: '', error: false }
  }
}

const headerStyle = css`
  margin-top: 0;
`

export function TxForm ({ onSave }) {
  const { create: createTransaction } = useTransactionActions()
  const [ fields, setField, setFields ] = useForm(defaultFields())

  function resetFields () {
    setFields(defaultFields())
  }

  function handleSave () {
    if (typeof onSave === 'function') {
      onSave(fields)
    }

    createTransaction({
      variables: {
        userId: fields.userId.value,
        merchantId: fields.merchantId.value,
        description: fields.description.value,
        debit: fields.debit.value,
        credit: fields.credit.value,
        amount: Number(fields.amount.value)
      }
    })

    resetFields()
  }

  return (
    <>
      <h2 css={headerStyle}>Create Transaction</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='description'
            label='Description'
            onChange={({ target: { value } }) =>
              setField('description', value)
            }
            required
            value={fields['description'].value}
            variant='standard'
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControlLabel
            control={(
              <Checkbox checked={fields['debit'].value}
                id='debit'
                onChange={({ target: { checked } }) =>
                  setField('debit', checked)
                } variant='standard' />
            )}
            label='Debit'
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <FormControlLabel
            control={(
              <Checkbox checked={fields['credit'].value}
                id='credit'
                onChange={({ target: { checked } }) =>
                  setField('credit', checked)
                } variant='standard' />
            )}
            label='Credit'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='amount'
            label='Amount'
            onChange={({ target: { value } }) =>
              setField('amount', value)
            }
            required
            type='number'
            value={fields['amount'].value}
            variant='standard'
          />
        </Grid>
        <Grid item xs={12}>
          <UserDropdown onChange={
            ({ target: { value } }) =>
              setField('userId', value)
          } value={fields['userId'].value} />
        </Grid>
        <Grid item xs={12}>
          <MerchantDropdown onChange={
            ({ target: { value } }) =>
              setField('merchantId', value)
          } value={fields['merchantId'].value} />
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={handleSave}
          sx={{ mt: 3, ml: 1 }}
          variant='contained'
        >
          Save
        </Button>
      </Box>
    </>
  )
}

TxForm.propTypes = {
  onSave: func
}
