import { useEffect, useState } from 'react'
import { Card, InputField } from '@/components'
import { getStock } from './service'
import { SUGGESTIONS } from '@/constants'
import { Spin } from 'antd'
import { ICardDefault } from '@/components/card/View'
import { CompareTo, HistoricalPrice } from './components'
import useDebounce from '@/hooks/useDebounce'
import * as Styled from './style'

const Home = () => {
  const [stock, setStock] = useState<string>('')
  const debouncedStock = useDebounce<string>(stock, 1500)

  const { mutate, data, isLoading } = getStock()

  useEffect(() => {
    if (stock && stock !== '') mutate({ stockName: debouncedStock })
  }, [debouncedStock])

  const searchStock = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const stockName = evt.target.value.trim()
    setStock(stockName)
  }

  return (
    <Styled.HomeWrapper>
      <Styled.SearchWrapper stockField={stock}>
        <InputField value={stock} onChange={searchStock} />
        <Styled.SearchSuggestions stockField={stock}>
          Suggestions:
          {SUGGESTIONS.map(
            (name) =>
              name !== stock && (
                <Styled.Suggestion key={name} onClick={() => setStock(name)}>
                  {name}
                </Styled.Suggestion>
              )
          )}
        </Styled.SearchSuggestions>
      </Styled.SearchWrapper>

      <Styled.ContentWrapper>
        {isLoading ? (
          <Spin />
        ) : (
          <>
            {debouncedStock && (
              <Styled.Content>
                <Styled.StockTitle>Current Price</Styled.StockTitle>
                <Card default={data as ICardDefault} withBorder />

                <HistoricalPrice stockName={stock} />
                <CompareTo stockName={stock} />
              </Styled.Content>
            )}
          </>
        )}
      </Styled.ContentWrapper>
    </Styled.HomeWrapper>
  )
}

export default Home
