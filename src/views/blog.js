import React from 'react'

import { Helmet } from 'react-helmet'

import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Half Flamboyant Meerkat</title>
        <meta property="og:title" content="Blog - Half Flamboyant Meerkat" />
      </Helmet>
    </div>
  )
}

export default Blog
