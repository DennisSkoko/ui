import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Card.module.css'

export interface CardProps {
  className?: string
  children?: ReactNode
}

export function Card({ className, children }: CardProps) {
  return <div className={classNames(className, styles.card)}>{children}</div>
}
