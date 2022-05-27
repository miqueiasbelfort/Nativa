import {Link} from 'react-router-dom'
import styles from "./Circle.module.css"

const Circle = ({link, icon}) => {
  return (
    <Link to={link}>
        <span className={styles.container}>
            {icon}
        </span>
    </Link>
  )
}

export default Circle