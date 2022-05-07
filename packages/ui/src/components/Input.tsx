import classNames from 'classnames'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { Text } from './Text'
import styles from './Input.module.css'

export interface InputProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  label?: string
  errorMessage?: string
}

export function Input({ children, label, errorMessage, ...props }: InputProps) {
  const [delayedErrorMessage, setDelayedErrorMessage] = useState(errorMessage)

  if (errorMessage && errorMessage !== delayedErrorMessage) setDelayedErrorMessage(errorMessage)

  const handleAnimationEnd = () => {
    if (!errorMessage && errorMessage !== delayedErrorMessage) setDelayedErrorMessage(errorMessage)
  }

  return (
    <div {...props}>
      <label>
        {label !== undefined && (
          <Text className={styles.label!} size='sm'>
            {label}
          </Text>
        )}

        {children}
      </label>

      {delayedErrorMessage && (
        <Text
          className={classNames(styles.errorMessage, errorMessage && styles.active)}
          onAnimationEnd={handleAnimationEnd}
          color='error'
        >
          {delayedErrorMessage}
        </Text>
      )}
    </div>
  )
}
