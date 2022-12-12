import styled from 'styled-components'
import { CardProps } from './View'

export const Card = styled.div<CardProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 21rem;
  height: 10rem;
  margin: 2rem auto;
  padding: 2em;
  border-radius: 0.75em;
  box-shadow: ${({ theme }) => theme.preDefined.cardBoxShadow};
  text-align: left;
  transition: transform 200ms ease-in;
  border-top: 5px solid ${({ theme }) => theme.color.primary};

  :hover {
    transform: scale(1.03);
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% - 4em);
  }

  @media ${({ theme }) => theme.device.mobileL} {
    height: 15rem;
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

  @media ${({ theme }) => theme.device.mobileL} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`

export const CardItemTitle = styled.div`
  font-weight: 600;
`

export const CardItemDescription = styled.div``
