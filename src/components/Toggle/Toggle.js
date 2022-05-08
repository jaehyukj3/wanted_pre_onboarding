import { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [toggle, setToggle] = useState(true)

  const changeToggle = () => {
    setToggle(() => !toggle)
  }

  return (
    <div role='presentation' onClick={changeToggle} className={styles.toggle}>
      <span className={toggle ? styles.active : styles.deactive}>기본</span>
      <span className={!toggle ? styles.active : styles.deactive}>상세</span>
      <div style={{ left: toggle ? '0%' : '50%' }} className={styles.slider} />
    </div>
  )
}

export default Toggle
