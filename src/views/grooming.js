import React from 'react'

import { Helmet } from 'react-helmet'

import './grooming.css'

const Grooming = (props) => {
  return (
    <div className="grooming-container">
      <Helmet>
        <title>Grooming - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Grooming - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default Grooming
