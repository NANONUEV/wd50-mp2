import React from 'react'

import { Helmet } from 'react-helmet'

import './new-client-form.css'

const NewClientForm = (props) => {
  return (
    <div className="new-client-form-container">
      <Helmet>
        <title>New-client-form - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="New-client-form - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default NewClientForm
