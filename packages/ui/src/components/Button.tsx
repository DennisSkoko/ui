import classNames from 'classnames'
import { MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProps {
  className?: string
  children?: ReactNode
  color?: 'default' | 'primary'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function Button({ className, color, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(className, styles.button, styles[color || 'default'])}
      {...props}
    />
  )
}
