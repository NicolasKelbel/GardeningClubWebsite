import React from 'react'
import "./homePageStyle.css"
import Welcome from '../../components/welcome/Welcome'
import AboutUs from '../../components/aboutUs/AboutUs'
import PlaceHolderWithLine from '../../components/placeholders/placeholderWIthLine/PlaceholderWithLine'
import PlaceHolderWithEmptyCircle from '../../components/placeholders/placeHolderWithEmptyCircle/PlaceHolderWithEmptyCircle'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Welcome />
        <PlaceHolderWithLine height={'20px'}/>
        <AboutUs />
        <PlaceHolderWithLine height={'60px'}/>
        <PlaceHolderWithEmptyCircle />
    </div>
  )
}

export default HomePage