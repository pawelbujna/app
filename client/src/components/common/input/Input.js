import React from 'react'
import PropTypes from 'prop-types'

function Input ({ label, name, onChange, value }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input type="text" id={name} name={name} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
