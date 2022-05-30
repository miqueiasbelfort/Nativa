import styles from "./Tupi_antigo.module.css"
import {GiSnakeEgg} from "react-icons/gi"

import Circle from '../../components/Circle'

const Tupi_antigo = () => {
  return (
    <div className={styles.container}>
      <h1>TUPI ANTIGO</h1>
      <div>

        <div className={styles.simple_container}>
          <h2>Introdução</h2>
          <Circle
            link="/tupi_antigo/introducao"
            icon={<GiSnakeEgg/>}
          />
        </div>
        <div className={styles.duo_container}>

          <div>
            <h2>Introdução</h2>
            <Circle
              link="/tupi_antigo/introducao"
              icon={<GiSnakeEgg/>}
            />
          </div>

          <div>
            <h2>Introdução</h2>
            <Circle
              link="/tupi_antigo/introducao"
              icon={<GiSnakeEgg/>}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Tupi_antigo