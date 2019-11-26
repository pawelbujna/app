import './User.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Button from 'components/common/button/Button'
import Input from 'components/common/input/Input'

function User() {
  const { id } = useParams()
  const [isEditing, setIsEditing] = useState(false)
  const [paramId] = useState(id)
  const [user, setUser] = useState({})

  const fetchUser = async () => {
    const res = await usersApi.get(paramId)
    console.log(res.data)
    setUser(res.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const handleInputChange = (event) => {
    console.log(user)
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const updateUser = async () => {
    await usersApi.save(user)

    setIsEditing(false)

    await fetchUser()
  }

  return (
    <Container>
      {!isEditing
        ? (
          <div>
            {user.name} {user.surname}
            <Button onClick={() => { setIsEditing(true) }} label="Edytuj" />
          </div>
        )
        : (
          <div>
            {user.name}
            <Input value={user.name} name="name" onChange={handleInputChange} />
            <Input value={user.surname} name="surname" onChange={handleInputChange} />
            <Button onClick={updateUser} label="Zapisz" />
            <Button onClick={() => { setIsEditing(false) }} label="Anuluj" />
          </div>
        )
      }
    </Container>
  )
}

export default User
