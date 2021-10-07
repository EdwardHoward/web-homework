import React, { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import GetMerchant from '../../gql/getMerchant.gql'
import { MerchantTable } from '../../components/merchants/MerchantTable'
import { useParams } from 'react-router-dom'

export function Merchant () {
  const { id } = useParams()
  const { loading, error, data = {} } = useQuery(GetMerchant, {
    variables: {
      id
    }
  })

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
      <MerchantTable data={[data.merchant]} />
    </Fragment>
  )
}
