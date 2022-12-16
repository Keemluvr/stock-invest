import React, { FC, InputHTMLAttributes } from 'react'
import { Button } from '../button/Styles'
import * as Styled from './Styles'
import { Empty } from 'antd'

export interface ICardDefault {
  title?: string
  items?: Array<{
    name: string
    value: string
  }>
}

export interface CardProps extends InputHTMLAttributes<HTMLInputElement> {
  default?: ICardDefault
  withBorder?: boolean
  onHandle?: (selected: ICardDefault | undefined) => void
}

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <Styled.Card
      default={props.default}
      className="card"
      withBorder={props.withBorder}
    >
      {!props.default && props.children}

      {props.default && !props.default.items && !props.default.title ? (
        <Empty />
      ) : (
        <>
          <Styled.CardTitle>{props.default?.title}</Styled.CardTitle>
          {props.default?.items?.map(({ name, value }) => (
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
      )}
    </Styled.Card>
  )
}

export default Card
