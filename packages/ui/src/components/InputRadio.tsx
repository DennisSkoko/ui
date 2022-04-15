import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'
import { Text } from './Text'
import styles from './InputRadio.module.css'

export interface InputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  disabled?: boolean
}

export function InputRadio({ label, disabled, className, ...props }: InputRadioProps) {
  return (
    <label className={classNames(className, styles.label, disabled && styles.disabled)}>
      <input type='radio' className={styles.radio} disabled={disabled} {...props} />
      <Text inline>{label}</Text>
    </label>
  )
}
