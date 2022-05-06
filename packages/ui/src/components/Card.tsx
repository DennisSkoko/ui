import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return <div className={classNames(className, styles.card)} {...props}>{children}</div>
}
