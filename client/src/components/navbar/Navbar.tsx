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
        <div className='header__logoContainer'>
            <img src="https://placehold.co/300x300" alt="" className='header__logo'/>
        </div>
        <div className='header__navLinkContainer'>
        <NavLink to='/' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Home</NavLink>
        <NavLink to='/blogs' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Blogs</NavLink>
        <NavLink to='/articles' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Articles</NavLink>
        <NavLink to='/contact' className={({isActive, isPending}:NavLinkClassTypes) => 
            isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
        } >Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar