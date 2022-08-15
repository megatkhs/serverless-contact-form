---
to: <%= dirname %>/<%= componentName %>.tsx
---
import { memo } from 'react'
import styles from './<%= componentName %>.module.scss'
import type { ComponentPropsWithoutRef } from 'react'

export type <%= componentName %>Props = ComponentPropsWithoutRef<'<%= tag %>'>

export const <%= componentName %> = memo<<%= componentName %>Props>(({ className,  ...props }) => {
  return (
    <<%= tag %> className={styles.module} {...props}>
    </<%= tag %>>
  )
})

<%= componentName %>.displayName = '<%= componentName %>'
