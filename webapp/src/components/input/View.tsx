import React, { FC, InputHTMLAttributes } from 'react'
import * as Styled from './Styles'

export interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputField: FC<InputFieldProps> = (props: InputFieldProps) => {
  return <Styled.InputField {...props} />
}

export default InputField
