import React from 'react'

import { Helmet } from 'react-helmet'

import './review-us.css'

const ReviewUs = (props) => {
  return (
    <div className="review-us-container">
      <Helmet>
        <title>Review-us - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Review-us - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default ReviewUs
