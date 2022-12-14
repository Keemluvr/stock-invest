import styled from 'styled-components'
import { CardProps } from './View'

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: ${(props) => (props.default ? '31rem' : 'auto')};
  height: auto;
  margin: 0 auto;
  padding: 1em 1.5em;
  border-radius: 0.75em;
  box-shadow: ${({ theme }) => theme.preDefined.cardBoxShadow};
  text-align: left;
  transition: transform 200ms ease-in;
  ${({ theme, withBorder }) =>
    withBorder && ` border-top: 5px solid ${theme.color.primary}`};

  :hover {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% - 4em);
  }
`

export const CardTitle = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.extraMedium};
  margin-bottom: 30px;

  @media ${({ theme }) => theme.device.mobileL} {
    margin-bottom: 40px;
  }
`

export const CardItem = styled.div`
  font-weight: 500;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.medium};
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 15%;

  @media ${({ theme }) => theme.device.laptopL} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`

export const CardItemTitle = styled.div`
  font-weight: 600;
`

export const CardItemDescription = styled.div``
