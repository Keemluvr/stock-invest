import { useState } from 'react'
import { Stock, StockConfig } from '@ant-design/plots'
import { Card, InputField } from '@/components'
import { getCompareTo, getStock, getStockHistory } from './service'
import { SELECT_SUGGESTIONS, SUGGESTIONS } from '@/constants'
import { StockDetails } from '@/types/stock'
import { DatePicker, Empty, Select } from 'antd'
import { formatDate } from '@/helpers'
import dayjs, { Dayjs } from 'dayjs'

import useDebounce from '@/hooks/useDebounce'
import * as Styled from './style'

const Home = () => {
  const { RangePicker } = DatePicker

  const today = dayjs()
  const [stock, setStock] = useState<string>('')
  const [to, setTo] = useState<Dayjs>(today)
  const [from, setFrom] = useState<Dayjs>(today.subtract(15, 'days'))
  const [compareTo, setCompareTo] = useState<string[]>([])
  const debouncedStock = useDebounce<string>(stock, 1500)

  const { data = {}, isLoading } = getStock(debouncedStock)

  const { data: history = [], isLoading: isLoadingHistory } = getStockHistory(
    debouncedStock,
    dayjs(from).toDate(),
    dayjs(to).toDate()
  )

  const { data: compare = [], isLoading: isLoadingCompare } = getCompareTo(
    debouncedStock,
    compareTo
  )

  const searchStock = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStock(evt.target.value)
  }

  const onChangeRangeHistory = ([startDate, endDate]: any) => {
    setFrom(startDate)
    setTo(endDate)
  }

  const disabledDate = (current: Dayjs) => {
    // Can not select days after today and today
    return current && current > today.endOf('day')
  }

  const stockPlotConfig: StockConfig = {
    data: history,
    xField: 'pricedAt',
    yField: ['opening', 'closing', 'high', 'low']
  }

  return (
    <Styled.HomeWrapper>
      <Styled.SearchWrapper stockField={stock}>
        <InputField value={stock} onChange={searchStock} />
        <Styled.SearchSuggestions stockField={stock}>
          Suggestions:
          {SUGGESTIONS.map((name) => (
            <Styled.Suggestion key={name} onClick={() => setStock(name)}>
              {name}
            </Styled.Suggestion>
          ))}
        </Styled.SearchSuggestions>
      </Styled.SearchWrapper>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          {debouncedStock && (
            <Styled.ContentWrapper>
              <Styled.StockTitle>Current Price</Styled.StockTitle>
              <Card default={data} withBorder />

              <Styled.StockHistoryWrapper>
                <Styled.StockTitle>Historical Price</Styled.StockTitle>

                {history.length ? (
                  <>
                    <RangePicker
                      placement="topLeft"
                      disabledDate={disabledDate}
                      defaultPickerValue={[from, to]}
                      value={[from, to]}
                      onCalendarChange={onChangeRangeHistory}
                      disabled={isLoadingHistory}
                    />

                    <Styled.StockHistory>
                      <Styled.StockList>
                        {history.map((stock: StockDetails, key: number) => (
                          <Card key={key}>
                            <p>
                              <h3>{formatDate(stock.pricedAt.toString())}</h3>
                            </p>
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
                      <Stock {...stockPlotConfig} />
                    </Styled.StockHistory>
                  </>
                ) : null}

                {isLoadingHistory && !history.length ? <>LOADING...</> : null}
                {!isLoadingHistory && !history.length ? <Empty /> : null}
              </Styled.StockHistoryWrapper>

              <Styled.StockHistoryWrapper>
                <Styled.StockTitle>Compare to</Styled.StockTitle>

                <Select
                  mode="tags"
                  onChange={setCompareTo}
                  tokenSeparators={[',']}
                  options={SELECT_SUGGESTIONS}
                />
                {!isLoadingCompare && !compare.length ? <Empty /> : null}
              </Styled.StockHistoryWrapper>
            </Styled.ContentWrapper>
          )}
        </>
      )}
    </Styled.HomeWrapper>
  )
}

export default Home
