import React from 'react'

import { Helmet } from 'react-helmet'

import './spay-neuter.css'

const SpayNeuter = (props) => {
  return (
    <div className="spay-neuter-container">
      <Helmet>
        <title>Spay-neuter - WD50_MP2</title>
        <meta property="og:title" content="Spay-neuter - WD50_MP2" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5df4fe0d-c56b-4e40-a2f8-62ae2ce60a05/4a54f7e3-642b-4238-85fb-fa6d9b3e4d19?org_if_sml=1"
        />
      </Helmet>
    </div>
  )
}

export default SpayNeuter
