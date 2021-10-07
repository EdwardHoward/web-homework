import { bool, node } from 'prop-types'
import React, { Fragment } from 'react'

export function Query ({ loading, error, children }) {
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
      {children}
    </Fragment>
  )
}

Query.propTypes = {
  loading: bool,
  error: bool,
  children: node
}
