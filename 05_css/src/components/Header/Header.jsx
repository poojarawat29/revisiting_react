import styles from './header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
    <h3>This is the header.</h3>
    <button className={styles.btn}>click me</button>

    </div>
  )
}

export default Header
