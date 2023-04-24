import React from 'react'

import { Helmet } from 'react-helmet'

import './teeth-cleaning.css'

const TeethCleaning = (props) => {
  return (
    <div className="teeth-cleaning-container">
      <Helmet>
        <title>Teeth-Cleaning - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Teeth-Cleaning - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default TeethCleaning
