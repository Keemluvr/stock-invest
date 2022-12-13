import { fetchHistoryStockByName, fetchStockByName } from '@/services/stock'
import { useQuery } from 'react-query'
import { Stock } from '@/types/stock'

export const getStock = (stockName: string, dependencies: string[] = []) =>
  useQuery({
    queryKey: ['stock', stockName, ...dependencies],
    queryFn: async () => await fetchStockByName(stockName),
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
    enabled: !!stockName || stockName !== ''
  })

export const getStockHistory = (
  stockName: string,
  from: Date,
  to: Date,
  dependencies: string[] = []
) =>
  useQuery({
    queryKey: ['history', from, to, stockName, ...dependencies],
    queryFn: async () => await fetchHistoryStockByName(stockName, from, to),
    select: (data) => {
      const prices = data?.data.prices
      const name = data?.data.name
      return prices?.map((price: Stock) => ({ ...price, name })) || []
    },
    enabled: !!stockName || stockName !== ''
  })
