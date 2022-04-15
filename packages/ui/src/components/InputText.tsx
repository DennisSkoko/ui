import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import styles from './InputText.module.css'

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export function InputText({ className, invalid, ...props }: InputTextProps) {
  return (
    <input className={classNames(className, styles.input, invalid && styles.invalid)} {...props} />
  );
}
