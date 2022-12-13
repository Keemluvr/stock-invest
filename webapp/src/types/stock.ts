export type Stock = {
  name: string
  lastPrice: number
  pricedAt: string
}

export type StockHistory = {
  name: string
  prices: Stock[]
}
