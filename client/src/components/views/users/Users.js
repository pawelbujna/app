import React, { useState, useEffect } from 'react'
import './Users.scss'

import axios from 'axios'

import { Link } from 'react-router-dom'

import Container from 'components/common/container/Container'

function Users () {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get('http://localhost:3000/users')

      setData(result.data)
    }
    fetchUsers()
  }, [])

  return (
    <Container>
      <Link to="/users/add">
        <button>Add user</button>
      </Link>
      <div>
        <ul>
          {data ? data.map(item => (
            <li key={item.name}>
              {item.name}
            </li>
          )) : null}
        </ul>
      </div>
    </Container>
  )
}

export default Users
