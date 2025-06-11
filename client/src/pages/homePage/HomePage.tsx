import React from 'react'
import "./homePageStyle.css"
import Welcome from '../../components/welcome/Welcome'
import AboutUs from '../../components/aboutUs/AboutUs'
import PlaceHolderWithLine from '../../components/placeholders/placeholderWithLine/PlaceholderWithLine'
import PlaceHolderWithCircle from '../../components/placeholders/placeHolderWithCircle/PlaceHolderWithCircle'

type Item = {
  text: string; // Define the shape of each item in the array
};

const HomePage = () => {

  const data: Item[] = [
    { text: 'The gardening club is an association created by the students at the SISS (State International School Seeheim), which aims to promote environmental sustainability, by creating a green space within the school. ' },
    { text: 'At the same time, its members are advocating to prioritize native species of plants over invasive ones, to raise awareness over the issues this creates.' },
    { text: 'This has so far been achieved by introducing more plants into the learning spaces. This action involves filling the classrooms with plants and an inside gravel pit with large potted shrubs and small trees.' },
    { text: 'Future projects will include creating a vegetable or herb garden for the school to access, which will help gauge interest in sustainable agriculture within the younger years.' },
  ];

  return (
    <div className='homepage'>
        <Welcome />
        <PlaceHolderWithLine height={'30px'}/>
        <AboutUs items={data}/>
        <PlaceHolderWithLine height={'60px'}/>
        <PlaceHolderWithCircle />
    </div>
  )
}

export default HomePage