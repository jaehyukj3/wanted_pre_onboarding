import Toggle from '../../components/toggle/Toggle'
import Tab from '../../components/tab/Tab'
import Input from '../../components/input/Input'
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
