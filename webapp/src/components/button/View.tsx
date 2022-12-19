import { FC, InputHTMLAttributes } from 'react'
import * as Styled from './Styles'

export interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <Styled.Button>{props.children}</Styled.Button>
}

export default Button
