import React from 'react'
import './Users.scss'

import { Link } from 'react-router-dom'

import Container from 'components/common/container/Container'

function Users () {
  return (
    <Container>
      <Link to="/users/add">
        <button>Add user</button>
      </Link>
    </Container>
  )
}

export default Users
