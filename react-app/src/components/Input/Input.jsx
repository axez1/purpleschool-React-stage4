import { forwardRef } from 'react'
import styled from './Input.module.css'
import cn from 'classnames'

const Input = forwardRef(function Input({ className, isValid, ...props }, ref) {
  return (
    <input {...props} className={cn(className, styled['input_name'], { [styled['invalid']]: !isValid })} ref={ref} />
  )
})

export default Input