import styles from './styles/about.module.css'
import { FaChevronDown } from "react-icons/fa/index.js";

export default function About(){

    return(
        <>
        <section id={styles['about__section']}>
            <div></div>
            <p>Hello,</p>
            <p>I'm Jayden Naylon.</p>
            <p>I'm a Junior Web Developer.</p>
            <button>View my projects <FaChevronDown /></button>
        </section>

        </>
    )

}