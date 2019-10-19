import React from 'react'
import './Nav.scss'

import { Link } from 'react-router-dom'

import Container from 'components/common/container/Container'

function Nav () {
  return (
    <Container>
      <nav className="navigation">
        <h3>DBschenker</h3>

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/users">
            <li>Users</li>
          </Link>
        </ul>
      </nav>
    </Container>
  )
}

export default Nav
