import { http } from '@/helpers'
import { Stock } from '@/types/stock'

export const fetchStockByName = async (stockName: string) =>
  await http<Stock>()
    .get(`/stock/${stockName}/quote`)
    .then((result) => result)
    .catch((error) => error)
