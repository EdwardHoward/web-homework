import React, { Fragment } from 'react';

export function Query({ loading, error, children }) {
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