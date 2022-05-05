import { useState } from 'react'
import styles from './Input.module.scss'
import { ImEye, ImEyeBlocked } from 'react-icons/im'
import { AiFillCheckCircle } from 'react-icons/ai'

function Input() {
  const [isValidEmail, setValidEmail] = useState(false)

  const [passwordType, setPasswordType] = useState({
    type: 'password',
    visible: false,
  })

  const checkValidEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailRegex.test(e.target.value)) {
      setValidEmail(() => false)
    } else {
      setValidEmail(() => true)
    }
  }
  const changePasswordType = () => {
    if (!passwordType.visible) {
      setPasswordType({ type: 'text', visible: true })
    } else {
      setPasswordType({ type: 'password', visible: false })
    }
  }
  return (
    <div className={styles.input}>
      <div className={styles.email}>
        <span className={styles.title}>E-mail</span>
        <div className={styles.inputWrapper}>
          <input type='text' onChange={checkValidEmail} placeholder='E-mail' />
          <span className={styles.iconWrapper}>
            <AiFillCheckCircle color={isValidEmail ? '#14b8a6' : '#000000'} className={styles.checkIcon} />
          </span>
        </div>
      </div>
      <div className='password'>
        <span className={styles.title}>Password</span>
        <div className={styles.inputWrapper}>
          <input type={passwordType.type} placeholder='Password' />
          <button type='button' className={styles.iconWrapper} onClick={changePasswordType}>
            {passwordType.visible ? (
              <ImEye color='#14b8a6' className={styles.visibleIcon} />
            ) : (
              <ImEyeBlocked className={styles.visibleIcon} />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
