import React from 'react'
import PropTypes from 'prop-types'

function Input({ label, name, validationRef, errors }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input type="checkbox" id={name} name={name} ref={validationRef} />
        {errors && errors[name] && <span>This field is required</span>}
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  validationRef: PropTypes.func,
  errors: PropTypes.object
}

export default Input
