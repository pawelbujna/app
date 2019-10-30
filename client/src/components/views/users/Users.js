import './Users.scss'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import httpApi from 'helpers/httpApi'
import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Button from 'components/common/button/Button'

function Users() {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await httpApi.get(usersApi.get)

      setData(result.data)
    }
    fetchUsers()
  }, [])

  return (
    <Container>
      <Link to="/users/add">
        <Button label="Dodaj" />
      </Link>
      <div>
        <ul>
          {data ? data.map(item => (
            <li key={item.name}>
              {item.name}
              <Link to={'/users/' + item._id}>
                <Button label="Edytuj" />
              </Link>
            </li>
          )) : null}
        </ul>
      </div>
    </Container >
  )
}

export default Users
