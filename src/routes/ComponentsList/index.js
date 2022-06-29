import Toggle from '../../components/Toggle'
import Tab from '../../components/Tab'
import Input from '../../components/Input'
import styles from './componentsList.module.scss'

function ComponentsList() {
  return (
    <div className={styles.componentsList}>
      <Toggle />
      <Tab />
      <Input />
    </div>
  )
}

export default ComponentsList
