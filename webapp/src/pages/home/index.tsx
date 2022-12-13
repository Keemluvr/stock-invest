import { useState } from 'react'
import { Stock, StockConfig } from '@ant-design/plots'
import { Card, InputField } from '@/components'
import { subtractDays } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import * as Styled from './style'
import { getStock, getStockHistory } from './service'
import { SUGGESTIONS } from '@/constants'

const Home = () => {
  const today = new Date()
  const [stock, setStock] = useState<string>('')
  const [to] = useState<Date>(today)
  const [from] = useState<Date>(subtractDays(to, 15))
  const debouncedStock = useDebounce<string>(stock, 1500)

  const { data, isLoading } = getStock(debouncedStock)

  const { data: history, isLoading: isLoadingHistory } = getStockHistory(
    debouncedStock,
    from,
    to
  )

  const searchStock = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStock(evt.target.value)
  }

  const stockPlotConfig: StockConfig = {
    data: history,
    xField: 'pricedAt',
    yField: ['opening', 'closing', 'high', 'low'],
    loading: isLoadingHistory
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

      <Styled.ContentWrapper>
        {(isLoading || isLoadingHistory) && <div>Loading ...</div>}
        {data && history && debouncedStock && (
          <>
            <Card default={data} />
            <Stock key={history} {...stockPlotConfig} />
          </>
        )}
      </Styled.ContentWrapper>
    </Styled.HomeWrapper>
  )
}

export default Home
