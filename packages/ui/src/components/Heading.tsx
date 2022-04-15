import classNames from 'classnames'
import { ReactNode } from 'react';
import styles from './Heading.module.css'

export interface HeadingProps {
  children?: ReactNode
  className?: string
  level?: "1" | "2" | "3" | "4" | "5" | "6"
  color?: "default" | "primary"
  centered?: boolean
  inline?: boolean
}

export function Heading({ className, level, color, centered, inline, ...props }: HeadingProps) {
  const type = `h${level || 1}`
  const Element = type as keyof JSX.IntrinsicElements;

  return (
    <Element
      className={
        classNames(
          className,
          styles.heading,
          styles[type],
          styles[color || "default"],
          centered && styles.centered,
          inline && styles.inline
        )}
      {...props}
    />
  )
}
