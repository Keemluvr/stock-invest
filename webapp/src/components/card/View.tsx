import React, { FC, InputHTMLAttributes } from 'react'
import { Button } from '../button/Styles'
import * as Styled from './Styles'

export interface ICardDefault {
  title: string
  items: Array<{
    name: string
    value: string
  }>
}

export interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
  default?: ICardDefault
  onHandle?: (selected: ICardDefault | undefined) => void
}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <Styled.Card>
      {props.default ? (
        <>
          <Styled.CardTitle>{props.default?.title}</Styled.CardTitle>
          {props.default?.items.map(({ name, value }) => (
            <Styled.CardItem key={name}>
              <Styled.CardItemTitle>{name}</Styled.CardItemTitle>
              <Styled.CardItemDescription>{value}</Styled.CardItemDescription>
            </Styled.CardItem>
          ))}
          {props.onHandle && (
            <Button onClick={() => props?.onHandle?.(props.default)}>
              More details
            </Button>
          )}
        </>
      ) : (
        props.children
      )}
    </Styled.Card>
  )
}

export default Card
