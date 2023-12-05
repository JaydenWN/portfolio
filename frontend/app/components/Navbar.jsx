import styles from './styles/Navbar.module.css'
import { NavLink } from '@remix-run/react'

export default function Navbar(){

    return(
        <nav id={styles["navbar"]}>
            <span>Jayden Naylon</span>
            <div id={styles['navbar__links']}>
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
            <button>=</button>
        </nav>
    )
}