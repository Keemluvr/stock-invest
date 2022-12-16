import { http, parameterizeArray } from '@/helpers'
import { Stock, StockDetails } from '@/types/stock'

export const fetchStockByName = async (stockName: string) =>
  await http<Stock>()
    .get(`/stock/${stockName}/quote`)
    .then((result) => result)
    .catch((error) => error)

export const fetchHistoryStockByName = async (
  stockName: string,
  from: Date,
  to: Date
) =>
  await http<StockDetails>()
    .get(`/stocks/${stockName}/history?from=${from}&to=${to}`)
    .then((result) => result)
    .catch((error) => error)

export const fetchCompareByName = async (
  stockName: string,
  stocksToCompare: string[]
) => {
  const query = parameterizeArray('stocksToCompare', stocksToCompare)
  return await http<StockDetails>()
    .get(`/stocks/${stockName}/compare${query}`)
    .then((result) => result)
    .catch((error) => error)
}
