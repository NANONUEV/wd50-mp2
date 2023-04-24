import React from 'react'

import { Helmet } from 'react-helmet'

import './vaccinations.css'

const Vaccinations = (props) => {
  return (
    <div className="vaccinations-container">
      <Helmet>
        <title>Vaccinations - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Vaccinations - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default Vaccinations
