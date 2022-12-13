import { http } from '@/helpers'
import { Stock, StockHistory } from '@/types/stock'

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
  await http<StockHistory>()
    .get(`/stocks/${stockName}/history?from=${from}&to=${to}`)
    .then((result) => result)
    .catch((error) => error)
