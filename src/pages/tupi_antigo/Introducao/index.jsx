import { useState } from "react"

import styles from "./Introducao.module.css"
//db
import {tupi_atg} from "../../../data/tupi_antigo"

const Introducao = () => {
    const [count, setCount] = useState(1)
    const [arrayOptions, setArrayOptions] = useState([])
    const [right_wrong, setRight_wrong] = useState(false)

    const [clicked, setCLicked] = useState("")
    const [color, setColor] = useState("")
    

    const handleClick = (option, elemente, stage) => {
        setArrayOptions(option)

        elemente.classList.add("clicked")

        if(option == stage.res){
            setRight_wrong(true)
        } 

    }

    const handleNext = (element) => {

        setCount(count + 1)
    
    }

    //console.log(arrayOptions)

  return (
    <div className={styles.container}>
        {
            tupi_atg.map(stage => (
                <div key={stage.optionId}>
                    { 
                        stage.optionId == count && stage.type == "int" && 

                       <>
                         <div className={styles.question_container}>

                                <h1>{stage.ask}</h1>
                                <p>{stage.tip}</p>

                                <div className="cards">

                                    {stage.options.map((option, index) => (
                                        <button onClick={(e) => handleClick(option, e.target, stage)} className="card" key={index}>
                                            <p>{option}</p>
                                        </button>
                                    ))}

                                </div>

                                <button className="btn" onClick={(e) => handleNext(e)}>Continuar</button>
                            </div>
                       </>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Introducao