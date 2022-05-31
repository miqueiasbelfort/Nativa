import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import {languages} from "../../data/languagens"

// imagens
import Tupi_Antigo from "../../assets/tupi_antigo.jpg"

const Home = () => {
  return (
    <div className={styles.container}>
        <h1>Aprenda linguas nativas Brasileiras</h1>
        <Link className={styles.about} to="/about">Saber mais...</Link>
        <div className={styles.cards_container}>
            {
                languages.map((lang) => (
                    <Link to={lang.link} key={lang.id}>
                        <div className={styles.card}>
                            <h2 className="macondo">{lang.name}</h2>
                            <p>Aprender</p>
                           {
                               lang.name == "Tupi Antigo" ?
                               <img className={styles.img} src={Tupi_Antigo} alt="menina" />
                               :
                               <></>
                           }
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home