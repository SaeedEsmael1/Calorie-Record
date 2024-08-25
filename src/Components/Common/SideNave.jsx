import styles from './SideNave.module.css';
import { NavLink } from "react-router-dom"
const SideNave = () => {
  return (
    <nav className={styles.nav}>
        <h1 className={styles.title}>Calories Tracker</h1>
        <NavLink 
            to=''
            className={({isActive})=> (isActive ? styles.active:undefined)}
            end
        >
            Home
        </NavLink>

        <NavLink 
            to='track'
            className={({isActive})=> (isActive ? styles.active:undefined)}
        >
            Track
        </NavLink>
    </nav>
  )
}

export default SideNave;