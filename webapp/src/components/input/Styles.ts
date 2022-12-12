import styled from 'styled-components'
import { InputFieldProps } from './View'

export const InputField = styled.input<InputFieldProps>`
  outline: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border.normal};
  padding: 7px 11px;
  background-color: transparent;
  width: 100%;
  height: 40px;
  font-size: ${({ theme }) => theme.font.size.small};

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }
`
