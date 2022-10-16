import React, { FC, ReactNode } from 'react'
import cx from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  containerClassName?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({ children, className, containerClassName, type = 'button', ...restProps }) => {

  return (
    <div className={cx(styles.container, containerClassName)}>
      <button
        className={cx(styles.button, className)}
        type={type}
        {...restProps}
      >
        {children}
      </button>
    </div>

  )
}
