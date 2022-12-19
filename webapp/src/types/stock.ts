export type Stock = {
  name: string
  lastPrice: number
  pricedAt: string
}

export type StockDetails = {
  closing: number
  high: number
  low: number
  opening: number
  pricedAt: Date
  volume: number | null
}

export type StockHistory = {
  name: string
  prices: StockDetails[]
}

export type StockCompare = {
  lastPrices: Stock[]
}

export type StockGains = {
  name: string
  lastPrice: number
  priceAtDate: string
  purchasedAmount: number
  purchasedAt: string
  capitalGains: number
}
