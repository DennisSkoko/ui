import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'
import { Text } from './Text'
import styles from './InputRadio.module.css'

export interface InputRadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  disabled?: boolean
}

export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(({ label, disabled, className, ...props }, ref) => {
  return (
    <label className={classNames(className, styles.label, disabled && styles.disabled)}>
      <input ref={ref} type='radio' className={styles.radio} disabled={disabled} {...props} />
      <Text inline>{label}</Text>
    </label>
  )
})
