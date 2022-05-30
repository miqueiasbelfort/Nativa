import { useState } from "react"

import styles from "./Introducao.module.css"
//db
import {tupi_atg} from "../../../data/tupi_antigo"

// components
import Alert from "../../../components/Alert"
import Introduction from "../../../components/Introduction"
import Table from "../../../components/Table"
import TrasformText from "../../../components/TrasformText"

const Introducao = () => {
    const [count, setCount] = useState(1)
    const [right_wrong, setRight_wrong] = useState(false)
    const [right, setRight] = useState("")
    
    const [txtChoice, setTxtChoice] = useState([])

    const handleClick = (option, elemente, stage) => {
        elemente.classList.add("clicked")
        if(option == stage.res){
            setRight_wrong(true)
        } else {
            setRight_wrong(false)
        }
    }

    const handleAssess = (element) => {
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

    const handleClear = () => {
        setTxtChoice([])
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
                       <Introduction 
                        stage={stage}
                        handleAssess={handleAssess}
                        handleClick={handleClick}
                       />
                    }
                    {
                        stage.optionId == count && stage.type == "exp" && stage.form == "table" && 
                        <Table
                            stage={stage}
                            handleNext={handleNext}
                        />
                    }
                    {
                         stage.optionId == count && stage.type == "text_form" &&
                         <TrasformText 
                            stage={stage}
                            handleAssessText={handleAssessText}
                            handleClear={handleClear}
                            handleOptionClick={handleOptionClick}
                            txtChoice={txtChoice}
                         />
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