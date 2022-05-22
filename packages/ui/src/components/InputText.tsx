import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './InputText.module.css'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ className, invalid, ...props }, ref) => {
  return <input ref={ref} className={classNames(className, styles.input, invalid && styles.invalid)} {...props} />
})
