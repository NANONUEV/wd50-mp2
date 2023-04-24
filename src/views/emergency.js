import React from 'react'

import { Helmet } from 'react-helmet'

import './emergency.css'

const Emergency = (props) => {
  return (
    <div className="emergency-container">
      <Helmet>
        <title>emergency - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="emergency - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default Emergency
