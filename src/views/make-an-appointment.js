import React from 'react'

import { Helmet } from 'react-helmet'

import './make-an-appointment.css'

const MakeAnAppointment = (props) => {
  return (
    <div className="make-an-appointment-container">
      <Helmet>
        <title>Make-an-appointment - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Make-an-appointment - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default MakeAnAppointment
