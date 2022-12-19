import { http, parameterizeArray } from '@/helpers'
import { Stock, StockCompare, StockDetails, StockGains } from '@/types/stock'

export const fetchStockByName = async (stockName: string) =>
  await http<Stock>()
    .get(`/stock/${stockName}/quote`)
    .then((result) => result?.data)
    .catch((error) => error)

export const fetchHistoryStockByName = async (
  stockName: string,
  from: Date,
  to: Date
) =>
  await http<StockDetails>()
    .get(`/stocks/${stockName}/history?from=${from}&to=${to}`)
    .then((result) => result?.data)
    .catch((error) => error)

export const fetchCompareByName = async (
  stockName: string,
  stocksToCompare: string[]
) => {
  const query: string = parameterizeArray('stocksToCompare', stocksToCompare)
  return await http<StockCompare>()
    .get(`/stocks/${stockName}/compare${query}`)
    .then((result) => result?.data?.lastPrices)
    .catch((error) => error)
}

export const fetchProjectionGains = async (
  stockName: string,
  purchasedAt: Date,
  purchasedAmount: number
) => {
  const query: string = `?purchasedAt=${purchasedAt}&purchasedAmount=${purchasedAmount}`
  return await http<StockGains>()
    .get(`/stocks/${stockName}/gains${query}`)
    .then((result) => result?.data)
    .catch((error) => error)
}
