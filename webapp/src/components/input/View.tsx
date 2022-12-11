import React, { FC, InputHTMLAttributes } from 'react'
import { Input } from './Styles'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField: FC<InputFieldProps> = (props: InputFieldProps) => {
  return <Input {...props} />
}

export default InputField
