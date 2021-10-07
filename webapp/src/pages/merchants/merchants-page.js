import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetMerchants from '../../gql/merchants.gql'
import { MerchantTable } from '../../components/merchants/MerchantTable'

export function Merchants () {
  const { loading, error, data = {} } = useQuery(GetMerchants)

  if (loading) {
    return (
      <Fragment>
        Loading...
      </Fragment>
    )
  }

  if (error) {
    return (
      <Fragment>
        ¯\_(ツ)_/¯
      </Fragment>
    )
  }

  return (
    <Fragment>
        <h1>Merchants</h1>
      <MerchantTable data={data.merchants} />
    </Fragment>
  )
}
