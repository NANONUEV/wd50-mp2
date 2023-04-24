import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Half Flamboyant Meerkat</title>
        <meta property="og:title" content="Contact - Half Flamboyant Meerkat" />
      </Helmet>
    </div>
  )
}

export default Contact
