import React from 'react'
import useForm from 'react-hook-form'

import usersApi from 'api/usersApi'

import Container from 'components/common/container/Container'
import Input from 'components/common/input/Input'
import Checkbox from 'components/common/checkbox/Checkbox'

function AddUser() {
  const { register, handleSubmit, errors } = useForm()

  const saveUser = async (userData) => {
    try {
      await usersApi.add(userData)
    } catch (error) {
      console.log(error)
    }
  }

  const prepareData = (userData) => {
    const user = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      roles: []
    }

    userData.manewrowy && user.roles.push('manewrowy')
    userData.ustawiacz && user.roles.push('ustawiacz')

    return user
  }

  const onSubmit = (userData) => {
    const user = prepareData(userData)
    
    console.log(user)
    // saveUser(user) // TODO: changed name to firstname and surname to lastname. Adjust model on BE.
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Imie"
          name="firstname"
          errors={errors}
          validationRef={register({ required: true })} />

        <Input
          label="Nazwisko"
          name="lastname"
          errors={errors}
          validationRef={register({ required: true })} />

        <Checkbox
          label="manewrowy"
          name="manewrowy"
          validationRef={register} />

        <Checkbox
          label="ustawiacz"
          name="ustawiacz"
          validationRef={register} />

        <input type="submit" value="Zapisz" />
      </form>
    </Container>
  )
}

export default AddUser
