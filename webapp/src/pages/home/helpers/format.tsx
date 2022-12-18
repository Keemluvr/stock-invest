import { formatDate } from '@/helpers'
import { Stock, StockHistory, StockDetails } from '@/types/stock'

type IStockResultFormat =
  | {
      title: string
      items: Stock[]
    }
  | {}

export const formatStockResponse = (stock: Stock): IStockResultFormat => {
  if (!stock) return {}

  return {
    title: stock.name,
    items: [
      { name: 'Last Price', value: stock.lastPrice },
      { name: 'Priced At', value: formatDate(stock.pricedAt) }
    ]
  }
}

export const formatHistoryStockResponse = (history: StockHistory) => {
  if (!history) return []

  const prices = history?.prices
  const name = history?.name

  return prices?.map((price: StockDetails) => ({ ...price, name })) || []
}
