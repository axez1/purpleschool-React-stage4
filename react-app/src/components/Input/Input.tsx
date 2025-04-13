import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.prpos';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, isValid = true, ...props }: InputProps,
  ref
) {
  return (
    <input
      {...props}
      className={cn(className, styles['input_name'], {
        [styles['invalid']]: !isValid,
      })}
      ref={ref}
    />
  );
});

export default Input;
