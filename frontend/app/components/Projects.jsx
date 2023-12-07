import Project_card from "./Project_card";
import styles from './styles/projects.module.css'

export default function Projects(){

    return(
        <section id={styles['project__section']}>
            <h1>My Recent Projects</h1>
            <div id={styles["project__list"]}>
                <Project_card 
                    title={'Project 1'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi dolorum dolores amet cupiditate omnis cum earum soluta optio debitis suscipit unde doloremque aut, ipsum numquam architecto beatae iste et. Fugit impedit'}/>
                <Project_card 
                    title={'Project 2'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi dolorum dolores amet cupiditate omnis cum earum soluta optio debitis suscipit unde doloremque aut, ipsum numquam architecto beatae iste et. Fugit impedit'}/>
                <Project_card 
                    title={'Project 3'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi dolorum dolores amet cupiditate omnis cum earum soluta optio debitis suscipit unde doloremque aut, ipsum numquam architecto beatae iste et. Fugit impedit'}/>
            </div>
        </section>
    )
}