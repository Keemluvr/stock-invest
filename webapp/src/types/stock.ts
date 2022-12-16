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
