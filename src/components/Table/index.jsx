import styles from "./Table.module.css"

const Table = ({stage, handleNext}) => {
  return (
    <div className={styles.container_table}>
        <h1>{stage.text}</h1>
        <div className={styles.table}>
            <div className={styles.table_colum}>
                {stage.colum_01.map((text, index) => (<h3 key={index}>{text}</h3>))}
            </div>
            <div className={styles.table_colum}>
                {stage.colum_02.map((text, index) => (<h3  key={index}>{text}</h3>))}
            </div>
        </div>
        <p className={styles.desc}>{stage.desc}</p>
        <button className="btn" onClick={handleNext}>Continuar</button>
    </div>
  )
}

export default Table