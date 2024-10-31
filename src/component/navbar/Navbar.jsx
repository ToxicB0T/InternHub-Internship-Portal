import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import Logo from "../logo/Logo"
import "./navbar.css"

export default function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="logoNavBar">
            <Logo />
        </div>
        <div className="navBarSearch">
            <form>
                <input type="search" placeholder="Search" />
                <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </div>
        <div className="navBarLinks">
            <ul>
                <li><NavLink className="leftSideNavBarLinks" to="/"><FontAwesomeIcon className='navBarHomeIcon' icon={faHouse} />Home</NavLink></li>
                <li><NavLink className="leftSideNavBarLinks" to="/profile">Profile</NavLink></li>
            </ul>
        </div>
    </div>
    
    </>
  )
}
