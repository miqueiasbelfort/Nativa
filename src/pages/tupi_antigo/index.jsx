import { Link } from "react-router-dom"
import styles from "./Tupi_antigo.module.css"
import {GiSnakeEgg} from "react-icons/gi"

import Circle from '../../components/Circle'

const Tupi_antigo = () => {
  return (
    <div className={styles.container}>
      <h1 className="macondo">TUPI ANTIGO</h1>
      <Link className={styles.back} to="/">Voltar</Link>
      <div>

        <div className={styles.simple_container}>
          <h2>Introdução</h2>
          <Circle
            link="/tupi_antigo/introducao"
            icon={<GiSnakeEgg/>}
          />
        </div>
        <div className={styles.duo_container}>
        </div>

      </div>
    </div>
  )
}

export default Tupi_antigo