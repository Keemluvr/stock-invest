import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border};
  font-size: ${({ theme }) => theme.font.size.small};
  padding: 7px 11px;
  background-color: transparent;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }
`
