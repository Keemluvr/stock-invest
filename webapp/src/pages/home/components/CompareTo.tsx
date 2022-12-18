import { FC } from 'react'
import { Card } from '@/components'
import { getCompareTo } from '../service'
import { SELECT_SUGGESTIONS } from '@/constants'
import { Stock as IStock } from '@/types/stock'
import { Empty, Select, Spin } from 'antd'
import { formatDate } from '@/helpers'
import * as Styled from '../style'
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  SwapOutlined
} from '@ant-design/icons'
import { isEmpty } from 'lodash'

export interface ICompareToProps {
  stockName: string
}

const CompareTo: FC<ICompareToProps> = ({ stockName }: ICompareToProps) => {
  const { mutate, data = [], isLoading } = getCompareTo()

  const onChangeCompareTo = (stocksToCompare: string[]) => {
    mutate({
      stockName,
      stocksToCompare
    })
  }

  const choiceIconForItemCompare = (
    defaultItem: IStock,
    itemToCompare: IStock
  ) => {
    const diffPrice = defaultItem.lastPrice - itemToCompare.lastPrice

    if (defaultItem.lastPrice > itemToCompare.lastPrice) {
      return (
        <Styled.ComparePriceUp>
          <ArrowUpOutlined /> <span>{diffPrice}</span>
        </Styled.ComparePriceUp>
      )
    }

    if (defaultItem.lastPrice < itemToCompare.lastPrice) {
      return (
        <Styled.ComparePriceDown>
          <ArrowDownOutlined /> <span>{diffPrice}</span>
        </Styled.ComparePriceDown>
      )
    }

    return <SwapOutlined />
  }

  return (
    <Styled.StockSectionWrapper>
      <Styled.StockTitle>Compare to</Styled.StockTitle>

      <Select
        mode="tags"
        onChange={onChangeCompareTo}
        tokenSeparators={[',']}
        options={SELECT_SUGGESTIONS}
      />

      {isLoading ? (
        <Spin />
      ) : (
        <>
          {isEmpty(data.length) ? (
            <Empty />
          ) : (
            <Styled.ListCompare>
              {data.map((item: IStock, key: number) => (
                <Card key={key}>
                  <p>
                    <span>{item.name}</span>
                    <span>{item.lastPrice}</span>
                    <span>{choiceIconForItemCompare(data[0], item)}</span>
                    <span> {formatDate(item.pricedAt.toString())}</span>
                  </p>
                </Card>
              ))}
            </Styled.ListCompare>
          )}
        </>
      )}
    </Styled.StockSectionWrapper>
  )
}
export default CompareTo