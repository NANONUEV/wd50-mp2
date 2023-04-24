import React from 'react'

import { Helmet } from 'react-helmet'

import './pet-exams.css'

const PetExams = (props) => {
  return (
    <div className="pet-exams-container">
      <Helmet>
        <title>Pet-exams - Half Flamboyant Meerkat</title>
        <meta
          property="og:title"
          content="Pet-exams - Half Flamboyant Meerkat"
        />
      </Helmet>
    </div>
  )
}

export default PetExams
