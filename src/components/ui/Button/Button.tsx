import styles from './Button.module.scss'
import type { FC, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, type = 'button' } = props
  return (
    <button className={styles.module} type={type}>
      <span className={styles.label}>{children}</span>
    </button>
  )
}

Button.displayName = 'Button'
