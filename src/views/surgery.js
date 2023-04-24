import React from 'react'

import { Helmet } from 'react-helmet'

import './surgery.css'

const Surgery = (props) => {
  return (
    <div className="surgery-container">
      <Helmet>
        <title>Surgery - Half Flamboyant Meerkat</title>
        <meta property="og:title" content="Surgery - Half Flamboyant Meerkat" />
      </Helmet>
    </div>
  )
}

export default Surgery
