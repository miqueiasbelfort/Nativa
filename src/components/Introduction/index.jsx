import styles from "./Introduction.module.css"

const Introduction = ({stage, handleAssess, handleClick}) => {
  return (
    <>
        <div className={styles.question_container}>

            <h1>{stage.ask}</h1>
            <p>{stage.tip}</p>

            <div className={styles.cards}>

                {stage.options.map((option, index) => (
                    <button onClick={(e) => handleClick(option, e.target, stage)} className={styles.card} key={index}>
                        {option}
                    </button>
                ))}

            </div>

            <button className="btn" onClick={e => handleAssess(e.target)}>Avaliar</button>
        </div>
    </>
  )
}

export default Introduction