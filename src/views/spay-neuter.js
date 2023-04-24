import React from 'react'

import { Helmet } from 'react-helmet'

import './spay-neuter.css'

const SpayNeuter = (props) => {
  return (
    <div className="spay-neuter-container">
      <Helmet>
        <title>Spay-neuter - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Spay-neuter - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default SpayNeuter
