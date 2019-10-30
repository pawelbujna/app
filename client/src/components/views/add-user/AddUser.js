import React, { useState } from 'react'

import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Input from 'components/common/input/Input'
import Button from 'components/common/button/Button'
import Checkbox from 'components/common/checkbox/Checkbox'

function AddUser() {
  const roles = [
    {
      name: 'manewrowy',
      role: 'ROLE1'
    },
    {
      name: 'shunter',
      role: 'ROLE2'
    },
    {
      name: 'train_manager',
      role: 'ROLE3'
    },
    {
      name: 'dupa',
      role: 'ROLE4'
    }
  ]
  const [inputs, setInputs] = useState({})

  const saveUser = async (event) => {
    event.preventDefault()

    try {
      await usersApi.add(inputs)
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    saveUser(event)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input label="Imie" name="name" value={inputs.name} onChange={handleInputChange} />
        <Input label="Nazwisko" name="surname" value={inputs.surname} onChange={handleInputChange} />
{/*
        {roles.map(item => (
          <Checkbox key={item.name} name={item.name}  />
        ))} */}

        <Button label="Zapisz" type="submit" />
      </form>
    </Container>
  )
}

export default AddUser
