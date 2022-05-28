import {Link} from 'react-router-dom'
import {GiSnakeEgg} from "react-icons/gi"

import Circle from '../../components/Circle'

const Tupi_antigo = () => {
  return (
    <div className="container">
      <h1>TUPI ANTIGO</h1>
      <div>

        <div className='simple_container all_line'>
          <h2>Introdução</h2>
          <Circle
            link="/tupi_antigo/introducao"
            icon={<GiSnakeEgg/>}
          />
        </div>
        <div className='duo_container'>

          <div className='all_line'>
            <h2>Introdução</h2>
            <Circle
              link="/tupi_antigo/introducao"
              icon={<GiSnakeEgg/>}
            />
          </div>

          <div className='all_line'>
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