import React from 'react'
import { useLocation } from 'react-router-dom';
import "./headerStyle.css"
import Navbar from '../navbar/Navbar';


const Header = () => {

  const isHomePage:boolean = useLocation().pathname === "/";

  return (
    <div className='header' id={isHomePage ? 'homePageHeader' : 'defaultHeader'}>
        <Navbar />
    </div>
  )
}

export default Header