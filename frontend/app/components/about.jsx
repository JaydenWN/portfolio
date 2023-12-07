import styles from './styles/about.module.css'
import { FaChevronDown, FaGithub} from "react-icons/fa/index.js";
import { Link } from '@remix-run/react';

export default function About(){

    return(
        
        <>
        <section id={styles['about__hero__section']}>
            <div id={styles['about__hero__image']}></div>
            <div id={styles['about__hero__content']}>
                <p>Hello,</p>
                <p>I'm Jayden Naylon.</p>
                <p>I'm a Junior Web Developer.</p>
                <span>
                <button>View my projects <FaChevronDown /></button>
                <Link to={'https://github.com/JaydenWN'}><FaGithub/></Link>
                </span>
            </div>
        </section>

        <section id={styles['about__me__section']}>
            <h1>A Little About Myself</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi dolorum dolores amet cupiditate omnis cum earum soluta optio debitis suscipit unde doloremque aut, ipsum numquam architecto beatae iste et. Fugit impedit quas, itaque accusamus neque at perferendis provident tempora.</p>
        </section>
        </>
       
    )

}