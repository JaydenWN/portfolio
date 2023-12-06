import styles from './styles/Navbar.module.css'
import { NavLink, Link } from '@remix-run/react'
import {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi/index.js";



export default function Navbar(){

    const [isClicked, setIsClicked] = useState(false)

    function handleDropdown(){
        isClicked ? setIsClicked(false) : setIsClicked(true);        
    }

    return(
        <nav id={styles["navbar"]}>
            <span id={styles['navbar__title']}><Link to="/">Jayden Naylon</Link></span>
            <div id={styles['navbar__links']} style={{display: isClicked ? 'flex' : ''}}>
                <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                    `${isPending ? styles['navbar--pending'] : isActive ? styles['navbar--active'] : ""}`
                }>Home
                </NavLink>

                <NavLink
                to='/about'
                className={({ isActive, isPending }) =>
                    `${isPending ? styles['navbar--pending'] : isActive ? styles['navbar--active'] : ""}`
                }>About Me
                </NavLink>

                <NavLink
                to='/projects'
                className={({ isActive, isPending }) =>
                    `${isPending ? styles['navbar--pending'] : isActive ? styles['navbar--active'] : ""}`
                }>Projects
                </NavLink>

                <NavLink
                to='/skills'
                className={({ isActive, isPending }) =>
                    `${isPending ? styles['navbar--pending'] : isActive ? styles['navbar--active'] : ""}`
                }>Skills
                </NavLink>

                <NavLink
                to='/contact'
                className={({ isActive, isPending }) =>
                     `${isPending ? styles['navbar--pending'] : isActive ? styles['navbar--active'] : ""}`
                }>Contact
                </NavLink>
            </div>
    
            <GiHamburgerMenu 
            onClick={()=>handleDropdown()}
            id={styles['navbar__hamburger']} />

        </nav>
    )
}