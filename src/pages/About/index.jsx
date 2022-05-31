import styles from './About.module.css'
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div className={styles.container}>
        <h1>Redes Sociais</h1>
        <div className={styles.social_container}>
            <a href="https://www.instagram.com/miqueiasbelfort/">Instagram</a>
            <a href="https://www.linkedin.com/in/miqueias-belfort/">LinkedIn</a>
            <a href="https://github.com/miqueiasbelfort">GitHub</a>
            <a href="https://miqueiasbelfort.netlify.app/">Portifolio</a>   
        </div>
        <p>Build with care by Miqueias Belfort</p>
        <Link className={styles.back} to="/">Voltar</Link>
    </div>
  )
}

export default About