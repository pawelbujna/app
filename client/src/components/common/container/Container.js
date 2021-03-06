import React from 'react'
import PropTypes from 'prop-types'

import './Container.scss'

function Container (props) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
