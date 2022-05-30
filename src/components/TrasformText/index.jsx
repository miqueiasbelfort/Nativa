import styles from "./TrasformText.module.css"

const TrasformText = ({stage, handleAssessText, handleOptionClick, handleClear, txtChoice}) => {
  return (
    <div className={styles.text_form_container}>
        <h1>Traduza para o {stage.to}:</h1>
        <h2>{stage.ask}</h2>
        <p className={styles.text_btn}>{txtChoice.join(" ")}</p>
        <div className={styles.btns_container}>
            {stage.options.map((option, index) => (
                <button 
                    key={index}
                    className={styles.btn_options}
                    onClick={() => handleOptionClick(option, stage.res)}
                >
                    {option}
                </button>
            ))}
        </div>
        <button className="btn" onClick={e => handleAssessText(e.target, stage)}>Avaliar</button>
        <button className="btn" onClick={handleClear}>Limpar</button>
    </div> 
  )
}

export default TrasformText