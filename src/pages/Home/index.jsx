import styles from "./Home.module.css"
import { Link } from "react-router-dom"
import {languages} from "../../data/languagens"

const Home = () => {
  return (
    <div className={styles.container}>
        <h1>Aprenda linguas nativas Brasileiras</h1>
        <div className={styles.cards_container}>
            {
                languages.map((lang) => (
                    <Link to={lang.link} key={lang.id}>
                        <div className={styles.card}>
                            <h2>{lang.name}</h2>
                            <p>Aprender</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home