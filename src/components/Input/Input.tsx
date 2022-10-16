import React, { FC, ReactNode, RefObject } from 'react'
import cx from 'classnames'
import styles from './Input.module.scss'

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  innerRef?: RefObject<HTMLInputElement>
  type?: string;
}

export const Input: FC<InputProps> = ({ children, className, type = 'text', innerRef, ...restProps }) => {

  return (
    <div className={cx(styles.input, className)}>
      <input
        type={type}
        autoComplete='new-password'
        ref={innerRef}
        {...restProps}
      />
      { children }
    </div>
  )
}
