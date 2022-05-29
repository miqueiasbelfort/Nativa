import React from 'react'

const Alert = ({type_alert, text, next, active}) => {
  return (
    <div className={`view ${active}`}>
      <div className={type_alert}>
            <h3>{text}</h3>
            <button className="btn" onClick={next}>Continuar</button>
        </div>
    </div>
  )
}

export default Alert
