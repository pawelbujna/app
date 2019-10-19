import React from 'react'
import './Nav.scss'

import {Link} from 'react-router-dom'

function Nav () {
  return (
    <nav>
      <h3>logo</h3>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav
