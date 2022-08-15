---
to: <%= dirname %>/<%= componentName %>.tsx
---
import styles from './<%= componentName %>.module.scss'
import type { FC } from 'react'

export const <%= componentName %>: FC = (props) => {
  return (
    <<%= tag %> className={styles.module} {...props}>
    </<%= tag %>>
  )
}

<%= componentName %>.displayName = '<%= componentName %>'
