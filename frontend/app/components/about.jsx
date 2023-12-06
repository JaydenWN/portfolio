import styles from './styles/about.module.css'
import { FaChevronDown, FaGithub} from "react-icons/fa/index.js";
import { Link } from '@remix-run/react';

export default function About(){

    return(
        <div id={styles['about__container']}>
        <section id={styles['about__section']}>
            <div></div>
            <p>Hello,</p>
            <p>I'm Jayden Naylon.</p>
            <p>I'm a Junior Web Developer.</p>
            <span>
            <button>View my projects <FaChevronDown /></button>
            <Link to={'https://github.com/JaydenWN'}><FaGithub/></Link>
            </span>
        </section>

        </div>
    )

}