import React, { forwardRef, useMemo } from 'react'
import { ListItem, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { css } from '@emotion/core'
import { string } from 'prop-types'

const linkStyle = css`
    &.is-active {
      background: black;
      color: white;
    }
`

export function ListItemLink ({ primary, to }) {
  // eslint-disable-next-line react/display-name
  const renderLink = useMemo(() => forwardRef((props, ref) =>
    <NavLink activeClassName='is-active' ref={ref} to={to} {...props} />, [to]))

  return (
    <ListItem button component={renderLink} css={linkStyle}>
      <ListItemText primary={primary} />
    </ListItem>
  )
}

ListItemLink.propTypes = {
  primary: string,
  to: string
}
