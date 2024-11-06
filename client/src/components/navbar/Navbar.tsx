import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbarStyle.css"

const Navbar = () => {

    interface NavLinkClassTypes {
        isActive: boolean,
        isPending: boolean
    }  

  return (
    <div className='navbar' >
        <div className='header__navbarContainer'>
            <div className='header__logoContainer'>
                <div className='header__logoBackground'>
                    <div className='header_logoPlaceholder'></div>
                </div>
            </div>
                <div className='header__navLinkContainer'>
                    <NavLink to='/' className={({isActive, isPending}:NavLinkClassTypes) => 
                        isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
                    } >HOME</NavLink>
                    <NavLink to='/blogs' className={({isActive, isPending}:NavLinkClassTypes) => 
                        isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
                    } >BLOGS</NavLink>
                    <NavLink to='/articles' className={({isActive, isPending}:NavLinkClassTypes) => 
                        isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
                    } >ARTICLES</NavLink>
                    <NavLink to='/contact' className={({isActive, isPending}:NavLinkClassTypes) => 
                        isPending ? "navLink navLink--pending" : isActive ? "navLink navLink--isActive" : "navLink"
                    } >CONTACT</NavLink>
                </div>
        </div>
    </div>
  )
}

export default Navbar