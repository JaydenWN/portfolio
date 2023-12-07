import styles from './styles/skills.module.css'


export default function Skills(){

    return(
        <section id={styles['skills_section']}>
        <h1>What I know</h1>
        {/*In future add map for skills in strapi*/}
        <div className={styles.skills__card}>
            <p>Title</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        
    </section>
    )
}