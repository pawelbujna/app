import React from 'react'
import './Users.scss'

import {Link} from 'react-router-dom'

function Users () {
  return (
    <Link to="/users/add">
      <button>Add user</button>
    </Link>
  );
}

export default Users
