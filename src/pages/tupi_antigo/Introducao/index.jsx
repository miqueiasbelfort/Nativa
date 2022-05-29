import { useState } from "react"

import styles from "./Introducao.module.css"
//db
import {tupi_atg} from "../../../data/tupi_antigo"
import Alert from "../../../components/Alert"

const Introducao = () => {
    const [count, setCount] = useState(1)
    const [right_wrong, setRight_wrong] = useState(false)
    const [right, setRight] = useState("")
    
    const [txtChoice, setTxtChoice] = useState([])
    const [stage, setStage] = useState("")

    const handleClick = (option, elemente, stage) => {
        elemente.classList.add("clicked")
        if(option == stage.res){
            setRight_wrong(true)
        } else {
            setRight_wrong(false)
        }
    }

    const handleAssess = (element, res) => {
        if(right_wrong){
            element.classList.add("right")
        } else {
            element.classList.add("wrong")
        }
        setRight("active")
    }

    const handleAssessText = (element, stage) => {

        if(txtChoice.join(" ") == stage.res){
            element.classList.add("right")
            setRight_wrong(true)
        } else {
            element.classList.add("wrong")
        }
        setRight("active")
    }

    const handleOptionClick = (option) => {
        setTxtChoice(txtChoice => [...txtChoice, option])
    }

    const handleNext = () => {
        setCount(count + 1)
        setRight_wrong(false)
        setRight("")
    }

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
                                            {option}
                                        </button>
                                    ))}

                                </div>

                                <button className="btn" onClick={e => handleAssess(e.target)}>Avaliar</button>
                            </div>
                       </>
                    }
                    {
                        stage.optionId == count && stage.type == "exp" && stage.form == "table" && 
                        <div className="container_table">
                            <h1>{stage.text}</h1>
                            <div className="table">
                                <div className="table_colum">
                                    {stage.colum_01.map((text, index) => (<h3 key={index}>{text}</h3>))}
                                </div>
                                <div className="table_colum">
                                    {stage.colum_02.map((text, index) => (<h3  key={index}>{text}</h3>))}
                                </div>
                            </div>
                            <p className={styles.desc}>{stage.desc}</p>
                            <button className="btn" onClick={handleNext}>Continuar</button>
                        </div>
                    }
                    {
                         stage.optionId == count && stage.type == "text_form" &&
                         <div className="text_form_container">
                            <h1>Traduza pora o portugês:</h1>
                            <h2>{stage.ask}</h2>
                            <p className="text_btn">{txtChoice.join(" ")}</p>
                            <div className="btns_container">
                                {stage.options.map((option, index) => (
                                    <button 
                                        key={index}
                                        className="btn_options"
                                        onClick={() => handleOptionClick(option, stage.res)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <button className="btn" onClick={e => handleAssessText(e.target, stage)}>Avaliar</button>
                            <button className="btn">Limpar</button>
                         </div> 
                    }
                </div>
            ))
        }

        <Alert 
            next={handleNext}
            type_alert={right_wrong ? "right_alert" : "wrong_alert"}
            text={right_wrong ? "Parabens!" : "Não foi dessa vez!"}
            active={right}
        />

    </div>
  )
}

export default Introducao