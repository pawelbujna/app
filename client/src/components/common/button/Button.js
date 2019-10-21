import React from 'react'
import PropTypes from 'prop-types'

function Button ({ type = 'button', label, onClick }) {
  return (
    <button type={type} onClick={onClick}>{label}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
