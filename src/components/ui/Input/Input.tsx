import styles from './Input.module.scss'
import type { FC } from 'react'

export const Input: FC = () => {
  return <input className={styles.module} />
}

Input.displayName = 'Input'
