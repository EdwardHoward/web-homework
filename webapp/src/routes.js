import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { css } from '@emotion/core'
import { Home } from './pages/home'
import { Transactions, Transaction } from './pages/transactions'
import { Users, User } from './pages/users'
import { Merchants, Merchant } from './pages/merchants'

function AppRouter () {
  return (
    <Router>
      <div css={layoutStyle}>
        <nav css={navStyle}>
          <ul >
            <li>
              <Link to='/transactions'>Transactions</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/merchants'>Merchants</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>
  )
}

export default AppRouter

const layoutStyle = css`
    display: grid;
    grid-row-gap: 24px;
    padding: 8px;
`

const navStyle = css`
  grid-row: 1;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`

const contentStyle = css`
  grid-row: 2;
`
