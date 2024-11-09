import React from 'react'
import "./homePageStyle.css"
import Welcome from '../../components/welcome/Welcome'
import AboutUs from '../../components/aboutUs/AboutUs'
import PlaceHolderWithLine from '../../components/placeholderWIthLine/PlaceHolderWithLine'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Welcome />
        <PlaceHolderWithLine />
        <AboutUs />
    </div>
  )
}

export default HomePage