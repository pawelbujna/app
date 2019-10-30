import './User.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import httpApi from 'helpers/httpApi'
import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Button from 'components/common/button/Button'
import Input from 'components/common/input/Input'

function User() {
  const { id } = useParams()
  const [isEditing, setIsEditing] = useState(false)
  const [paramId] = useState(id)
  const [user, setUser] = useState({ name: '', surname: '' })

  const fetchUser = async () => {
    const res = await httpApi.get(usersApi.get + paramId)
    console.log(res)
    setUser(res.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const updateUser = async () => {
    await httpApi.post(usersApi.save, user)
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
            <Input value={user.name} onChange={(e) => { setUser({ name: e.target.value }) }} />
            <Button onClick={updateUser} label="Zapisz" />
            <Button onClick={() => { setIsEditing(false) }} label="Anuluj" />
          </div>
        )
      }

    </Container>
  )
}

export default User
