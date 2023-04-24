import React from 'react'

import { Helmet } from 'react-helmet'

import './our-team.css'

const OurTeam = (props) => {
  return (
    <div className="our-team-container">
      <Helmet>
        <title>Our-team - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Our-team - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default OurTeam
