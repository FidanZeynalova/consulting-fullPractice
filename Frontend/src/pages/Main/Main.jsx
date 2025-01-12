import React from 'react'
import Home from '../../components/Home/Home'
import Services from '../../components/Services/Services'
import Features from '../../components/Features/Features'
import Members from '../../components/Members/Members'
import { Helmet } from 'react-helmet'

function Main() {
  return (
    <>
    <Helmet>
      <title>Main Page</title>
      <link rel="icon" href="https://is.gd/U6sZYi" type="image/x-icon" />
    </Helmet>
      <Home/>
      <Services/>
      <Features/>
      <Members/>
    </>
  )
}

export default Main
