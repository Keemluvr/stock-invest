import { useEffect, useState } from 'react'
import { Stock, StockConfig } from '@ant-design/plots'
import { Card } from '@/components'
import { getStockHistory } from '../service'
import { StockDetails } from '@/types/stock'
import { DatePicker, Empty, Spin } from 'antd'
import { formatDate } from '@/helpers'
import { isEmpty } from 'lodash'
import dayjs, { Dayjs } from 'dayjs'
import * as Styled from '../style'
import { useStockState } from '@/contexts/stocks'

const HistoricalPrice = () => {
  const { RangePicker } = DatePicker
  const { stockName } = useStockState()

  const today = dayjs()
  const [to, setTo] = useState<Dayjs>(today)
  const [from, setFrom] = useState<Dayjs>(today.subtract(15, 'days'))

  const { mutate, data = [], isLoading } = getStockHistory()

  useEffect(() => {
    if (stockName && stockName !== '') onChangeRangeHistory([from, to])
  }, [stockName])

  const onChangeRangeHistory = ([
    startDate = today,
    endDate = today.subtract(15, 'days')
  ]: [Dayjs, Dayjs]) => {
    setFrom(startDate)
    setTo(endDate)
    mutate({
      stockName,
      from: new Date(dayjs(startDate).toDate()),
      to: new Date(dayjs(endDate).toDate())
    })
  }

  const disabledDate = (current: Dayjs) => {
    // Can not select days after today
    return current && current > today.endOf('day')
  }

  const stockPlotConfig: StockConfig = {
    data,
    xField: 'pricedAt',
    yField: ['opening', 'closing', 'high', 'low']
  }

  return (
    <Styled.StockSectionWrapper>
      <Styled.StockTitle data-test-id="historical-price-title">
        Historical Price
      </Styled.StockTitle>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          {isEmpty(data) ? (
            <Empty />
          ) : (
            <>
              <RangePicker
                placement="topLeft"
                disabledDate={disabledDate}
                defaultPickerValue={[from, to]}
                value={[from, to]}
                onCalendarChange={(evt) =>
                  onChangeRangeHistory(evt as [Dayjs, Dayjs])
                }
                disabled={isLoading}
              />

              <Styled.StockHistory key={data.length}>
                <Styled.StockList>
                  {data.map((stock: StockDetails, key: number) => (
                    <Card key={key}>
                      <h3>{formatDate(stock.pricedAt.toString())}</h3>
                      <p>
                        <span>Opening: </span>
                        <span>{stock.opening}</span>
                      </p>
                      <p>
                        <span>Closing: </span>
                        <span>{stock.closing}</span>
                      </p>
                      <p>
                        <span>High: </span>
                        <span>{stock.high}</span>
                      </p>
                      <p>
                        <span>Low: </span>
                        <span>{stock.low}</span>
                      </p>
                    </Card>
                  ))}
                </Styled.StockList>

                <Stock {...stockPlotConfig} key={data.length} />
              </Styled.StockHistory>
            </>
          )}
        </>
      )}
    </Styled.StockSectionWrapper>
  )
}

export default HistoricalPrice
