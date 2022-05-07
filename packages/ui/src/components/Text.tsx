import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.css'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
  color?: 'default' | 'primary' | 'error'
  inline?: boolean
}

export function Text({ className, size, centered, color, inline, ...props }: TextProps) {
  return (
    <p
      className={classNames(
        className,
        styles.text,
        styles[size || 'md'],
        styles[color || 'default'],
        centered && styles.centered,
        inline && styles.inline
      )}
      {...props}
    />
  )
}
