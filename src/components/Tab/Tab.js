import { useState } from 'react'
import styles from './Tab.module.scss'

const TABS = ['감자', '고구마', '카레라이스']

function Tab() {
  const [tab, setTab] = useState(0)

  const changeTab = (index) => {
    setTab(() => index)
  }

  return (
    <div className={styles.tab}>
      {TABS.map((tabName, index) => (
        <div
          role='presentation'
          onClick={() => changeTab(index)}
          className={tab === index ? styles.active : styles.deactive}
        >
          <span>{tabName}</span>
        </div>
      ))}
      <div className={styles.sliderWrapper} style={{ width: `${20 * TABS.length}vw` }}>
        <div
          style={{ left: `${(100 * tab) / TABS.length}%`, width: `${(100 * 1) / TABS.length}%` }}
          className={styles.slider}
        />
      </div>
    </div>
  )
}

export default Tab
