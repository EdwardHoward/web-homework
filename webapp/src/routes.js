import React, { forwardRef, useMemo } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './pages/home'
import { Transactions, Transaction } from './pages/transactions'
import { Users, User } from './pages/users'
import { Merchants, Merchant } from './pages/merchants'
import { CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Box } from '@mui/system'

function ListItemLink({ icon, primary, to }) {
  const renderLink = useMemo(() => forwardRef((props, ref) => <Link to={to} ref={ref} {...props} />, [to]));

  return (
    <ListItem button component={renderLink}>
      <ListItemText primary={primary} />
    </ListItem>
  );
}

function AppRouter() {
  return (
    <Router>
      <CssBaseline />
      <Box css={layoutStyle}>
        <Drawer css={navStyle} variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          </Toolbar>
          <Divider />
          <List>
            <ListItemLink primary="Transactions" to="/transactions" />
            <ListItemLink primary="Users" to="/users" />
            <ListItemLink primary="Merchants" to="/merchants" />
          </List>
        </Drawer>
        <div className='main-content' css={contentStyle}>
          <Route component={Home} exact path='/' />
          <Route component={Transaction} exact path='/transactions/:id' />
          <Route component={Transactions} exact path='/transactions' />

          <Route component={User} exact path='/users/:id' />
          <Route component={Users} exact path='/users' />

          <Route component={Merchant} exact path='/merchants/:id' />
          <Route component={Merchants} exact path='/merchants' />
          <Route component={() => (<div>Content for /another route</div>)} exact path='/another' />
        </div>
      </Box>
    </Router >
  )
}

export default AppRouter

const layoutStyle = css`
    display: flex;
`

const navStyle = css`
  & .MuiDrawer-paper {
    position: relative;
    whitespace: nowrap;
    width: 240px;
  }
`

const contentStyle = css`
  flex-grow: 1;
  padding: 2rem;
  height: 100vh;
`
