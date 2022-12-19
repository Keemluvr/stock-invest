import { formatDate, formatToUSD } from '@/helpers'
import { Stock, StockHistory, StockDetails, StockGains } from '@/types/stock'

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
      { name: 'Last Price', value: formatToUSD(stock.lastPrice) },
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

export const formatEarningStockResponse = (earning: StockGains) => {
  if (!earning) return []

  return {
    title: earning.name,
    items: [
      { name: 'Last Price', value: formatToUSD(earning.lastPrice) },
      { name: 'Priced At', value: formatDate(earning.priceAtDate) },
      { name: 'Purchased Amount', value: earning.purchasedAmount },
      { name: 'Purchased At', value: formatDate(earning.purchasedAt) },
      { name: 'Capital Gains', value: formatToUSD(earning.capitalGains) }
    ]
  }
}
