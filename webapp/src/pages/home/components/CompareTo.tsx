import { Card } from '@/components'
import { getCompareTo } from '../service'
import { SELECT_SUGGESTIONS } from '@/constants'
import { Stock as IStock } from '@/types/stock'
import { Select, Spin } from 'antd'
import { formatDate, formatToUSD } from '@/helpers'
import * as Styled from '../style'
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  SwapOutlined
} from '@ant-design/icons'
import { useStockState } from '@/contexts/stocks'

export interface ICompareToProps {
  stockName: string
}

const CompareTo = () => {
  const { stockName } = useStockState()

  const { mutate, data = [], isLoading } = getCompareTo()

  const onChangeCompareTo = (stocksToCompare: string[]) => {
    if (stockName && stockName !== '') {
      mutate({
        stockName,
        stocksToCompare
      })
    }
  }

  const choiceIconForItemCompare = (
    defaultItem: IStock,
    itemToCompare: IStock
  ) => {
    const diffPrice = formatToUSD(
      defaultItem.lastPrice - itemToCompare.lastPrice
    )

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

    return (
      <Styled.ComparePriceEqual>
        <SwapOutlined /> <span>{diffPrice}</span>
      </Styled.ComparePriceEqual>
    )
  }

  return (
    <Styled.StockSectionWrapper>
      <Styled.StockTitle>Compare to</Styled.StockTitle>

      <Select
        mode="tags"
        onChange={onChangeCompareTo}
        tokenSeparators={[',']}
        options={SELECT_SUGGESTIONS?.filter(
          (option) => option.label !== stockName
        )}
      />

      {isLoading ? (
        <Spin />
      ) : (
        <Styled.ListCompare>
          {data.map((item: IStock, key: number) => (
            <Card key={key}>
              <Styled.CompareItem>
                <span>{item.name}</span>
                <span>{formatToUSD(item.lastPrice)}</span>
                <span>{choiceIconForItemCompare(data[0], item)}</span>
                <span> {formatDate(item.pricedAt.toString())}</span>
              </Styled.CompareItem>
            </Card>
          ))}
        </Styled.ListCompare>
      )}
    </Styled.StockSectionWrapper>
  )
}
export default CompareTo
