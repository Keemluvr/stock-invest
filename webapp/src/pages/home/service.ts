import {
  fetchCompareByName,
  fetchHistoryStockByName,
  fetchStockByName
} from '@/services/stock'
import { useQuery } from 'react-query'
import { Stock } from '@/types/stock'
import { formatDate } from '@/helpers'

export const getStock = (stockName: string) =>
  useQuery({
    queryKey: ['stock', stockName],
    queryFn: async () => await fetchStockByName(stockName),
    select: (data) => {
      const stock = data?.data
      return {
        title: stock.name,
        items: [
          { name: 'Last Price', value: stock.lastPrice },
          { name: 'Priced At', value: formatDate(stock.pricedAt) }
        ]
      }
    },
    enabled: !!stockName || stockName !== ''
  })

export const getStockHistory = (stockName: string, from: Date, to: Date) =>
  useQuery({
    queryKey: ['history', from, to, stockName],
    queryFn: async () => await fetchHistoryStockByName(stockName, from, to),
    select: (data) => {
      const prices = data?.data.prices
      const name = data?.data.name
      return prices?.map((price: Stock) => ({ ...price, name })) || []
    },
    enabled: !!stockName || stockName !== ''
  })

export const getCompareTo = (stockName: string, stocksToCompare: string[]) =>
  useQuery({
    queryKey: [stockName, stocksToCompare.length],
    queryFn: async () => await fetchCompareByName(stockName, stocksToCompare),
    select: (data) => {
      return data?.data?.lastPrices
    },
    enabled: false
  })
