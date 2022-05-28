import { useState } from "react"

import styles from "./Introducao.module.css"
//db
import {tupi_atg} from "../../../data/tupi_antigo"

const Introducao = () => {
    const [count, setCount] = useState(1)

  return (
    <div className={styles.container}>
        {
            tupi_atg.map(stage => (
                <div key={stage.optionId}>
                    { 
                        stage.optionId == count && stage.type == "int" && 

                        <div className={styles.question_container}>
                            
                            <h1>{stage.ask}</h1>
                            <p>{stage.tip}</p>

                            <div className={styles.cards}>

                                {stage.options.map((option, index) => (
                                    <div className={styles.card} key={index}>
                                        {option}
                                    </div>
                                ))}

                            </div>

                        </div>

                    }
                </div>
            ))
        }
        <button className="btn" onClick={() => setCount(count + 1)}>Continuar</button>
    </div>
  )
}

export default Introducao