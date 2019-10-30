import React, { useState } from 'react'

import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Input from 'components/common/input/Input'
import Button from 'components/common/button/Button'
import Checkbox from 'components/common/checkbox/Checkbox'

function AddUser() {
  const [inputs, setInputs] = useState({ roles: [] })

  const saveUser = async (event) => {
    event.preventDefault()

    try {
      await usersApi.add(inputs)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChackBoxChange = (event) => {
    event.persist()
    if(event.target.checked) {
      setInputs({
          roles: [...inputs.roles, event.target.value]
        })
    } else {
      setInputs({
        roles: inputs.roles.filter(item => item !== event.target.value)
      })
    }
    console.log(inputs)
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs({ [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    saveUser(event)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input label="Imie" name="name" value={inputs.name} onChange={handleInputChange} />
        <Input label="Nazwisko" name="surname" value={inputs.surname} onChange={handleInputChange} />

           <Checkbox key="manewrowy" name="manewrowy" value="manewrowy" onChange={handleChackBoxChange}  />
           <Checkbox key="ustawiacz" name="ustawiacz" value="ustawiacz" onChange={handleChackBoxChange}  />

        <Button label="Zapisz" type="submit" />
      </form>
    </Container>
  )
}

export default AddUser
