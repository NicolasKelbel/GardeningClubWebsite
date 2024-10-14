import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbarStyle.css"

const Navbar = ({ isHomePage }: { isHomePage: boolean }) => {

    interface NavLinkClassTypes {
        isActive: boolean,
        isPending: boolean
    }  

  return (
    <div className='navbar' id={isHomePage ? 'homepage' : ''}>
        <NavLink to='/' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Home</NavLink>
        <NavLink to='/blogs' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Blogs</NavLink>
        <div className='header__logoContainer'>
            <img src="https://placehold.co/100x80" alt="" />
        </div>
        <NavLink to='/articles' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Articles</NavLink>
        <NavLink to='/contact' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Contact</NavLink>
    </div>
  )
}

export default Navbar