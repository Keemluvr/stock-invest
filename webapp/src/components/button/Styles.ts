import styled from 'styled-components'
import { ButtonProps } from './View'

export const Button = styled.button<ButtonProps>`
  display: block;
  outline: none;
  cursor: pointer;
  position: relative;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.button.background};
  padding: 9px 22px 9px 16px;
  line-height: 26px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.withBackground};

  &:hover {
    background: ${({ theme }) => theme.color.button.backgroundHover};
  }
`
