import React from 'react'

import { Helmet } from 'react-helmet'

import './our-culture.css'

const OurCulture = (props) => {
  return (
    <div className="our-culture-container">
      <Helmet>
        <title>Our-culture - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Our-culture - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default OurCulture
