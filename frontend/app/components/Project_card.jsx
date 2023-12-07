import styles from './styles/project_card.module.css'

export default function Project_card({title, desc, img}){

    return(
        <div className={styles.project__card}>
            <img className={styles.project__card__image} src={img} alt="" />
            <p className={styles.project__card__title}>{title}</p>
            <p className={styles.project__card__desc}>{desc}</p>
            <button>VIEW</button>
        </div>
    )
}