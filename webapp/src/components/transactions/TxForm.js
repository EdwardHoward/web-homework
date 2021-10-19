import React, { useReducer } from 'react'
import { Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, Input, InputLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useMutation } from '@apollo/client'
import { formReducer } from '../../reducers/formReducer'
import { MerchantDropdown } from '../merchants/MerchantDropdown'
import { UserDropdown } from '../users/UserDropdown'
import createTransactionMutation from '../../gql/mutations/createTransaction.gql'
import GetTransaction from '../../gql/transactions.gql'

export function TxForm ({ onSave }) {
  const [createTransaction] = useMutation(createTransactionMutation, {
    refetchQueries: [{
      query: GetTransaction
    }]
  })

  const [fields, dispatch] = useReducer(formReducer, {
    'userId': { name: 'userId', value: '', error: false },
    'description': { name: 'description', value: '', error: false },
    'debit': { name: 'debit', value: false, error: false },
    'credit': { name: 'credit', value: false, error: false },
    'amount': { name: 'amount', value: '', error: false },
    'merchantId': { name: 'merchantId', value: '', error: false }
  })

  function setValue (field, value) {
    dispatch({ type: 'set_field_value', field, value })
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
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id='description'
            label='Description'
            onChange={({ target: { value } }) =>
              setValue('description', value)
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
                  setValue('debit', checked)
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
                  setValue('credit', checked)
                } variant='standard' />
            )}
            label='Credit'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor='amount'>amount</InputLabel>
            <Input checked={fields['amount'].value} id='amount'
              onChange={({ target: { value } }) =>
                setValue('amount', value)
              } />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <UserDropdown onChange={
            ({ target: { value } }) =>
              setValue('userId', value)
          } value={fields['userId'].value} />
        </Grid>
        <Grid item xs={12}>
          <MerchantDropdown onChange={
            ({ target: { value } }) =>
              setValue('merchantId', value)
          } value={fields['merchantId'].value} />
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Button onClick={() => { }} sx={{ mt: 3, ml: 1 }}>
          Cancel
        </Button> */}
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
