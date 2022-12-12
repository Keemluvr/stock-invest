import { useState } from 'react'
import { useQuery } from 'react-query'
import useDebounce from '@/hooks/useDebounce'
import { fetchStockByName } from '@/services/stock'
import { Card, InputField } from '@/components'
import * as Styled from './style'
import { ICardDefault } from '@/components/card/View'

const Home = () => {
  const [stock, setStock] = useState<string>('')
  const debouncedStock = useDebounce<string>(stock, 1500)
  const suggestions: string[] = ['AGAC', 'LEAD', 'LNN', 'MELI', 'NETZ']

  const { data, isLoading } = useQuery({
    queryKey: [debouncedStock],
    queryFn: async () => await fetchStockByName(debouncedStock),
    select: (data) => {
      const stock = data?.data
      return {
        title: stock.name,
        items: [
          { name: 'Last Price', value: stock.lastPrice },
          { name: 'Priced At', value: stock.pricedAt }
        ]
      }
    },
    enabled: !!debouncedStock || debouncedStock !== ''
  })

  const searchStock = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStock(evt.target.value)
  }

  const onClickStock = (item: ICardDefault | undefined) => {}

  return (
    <Styled.HomeWrapper>
      <Styled.SearchWrapper stockField={stock}>
        <InputField value={stock} onChange={searchStock} />
        <Styled.SearchSuggestions stockField={stock}>
          Suggestions:
          {suggestions.map((name) => (
            <Styled.Suggestion key={name} onClick={() => setStock(name)}>
              {name}
            </Styled.Suggestion>
          ))}
        </Styled.SearchSuggestions>
      </Styled.SearchWrapper>

      <Styled.ContentWrapper>
        {isLoading && <div>Loading ...</div>}
        {!isLoading && data && debouncedStock && (
          <Card default={data} onHandle={onClickStock} />
        )}
      </Styled.ContentWrapper>
    </Styled.HomeWrapper>
  )
}

export default Home
