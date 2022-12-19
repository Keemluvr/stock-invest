import {
  fetchCompareByName,
  fetchHistoryStockByName,
  fetchProjectionGains,
  fetchStockByName
} from '@/services/stock'
import { useMutation } from 'react-query'
import {
  formatEarningStockResponse,
  formatHistoryStockResponse,
  formatStockResponse
} from './helpers/format'

interface IGetStockMutateParams {
  stockName: string
}

/**
 * Fetch the latest quote for the specified stock.
 */
export const getStock = () => {
  const { data, ...props } = useMutation(
    async ({ stockName }: IGetStockMutateParams) =>
      await fetchStockByName(stockName)
  )
  return { data: formatStockResponse(data), ...props }
}

interface IGetStockHistoryMutateParams {
  stockName: string
  from: Date
  to: Date
}

/**
 * Fetch all the changes of the specified action in the sent period.
 */
export const getStockHistory = () => {
  const { data, ...props } = useMutation({
    mutationFn: async (params: IGetStockHistoryMutateParams) =>
      await fetchHistoryStockByName(params.stockName, params.from, params.to)
  })
  return { data: formatHistoryStockResponse(data), ...props }
}

interface IGetCompareToMutateParams {
  stockName: string
  stocksToCompare: string[]
}

/**
 * Bring the last change of the main action and all the actions sent for comparison.
 */
export const getCompareTo = () =>
  useMutation(
    async (params: IGetCompareToMutateParams) =>
      await fetchCompareByName(params.stockName, params.stocksToCompare)
  )

interface IGetEarningForecasts {
  stockName: string
  purchasedAt: Date
  purchasedAmount: number
}

export const getEarningForecasts = () => {
  const { data, ...props } = useMutation(
    async (params: IGetEarningForecasts) =>
      await fetchProjectionGains(
        params.stockName,
        params.purchasedAt,
        params.purchasedAmount
      )
  )
  return { data: formatEarningStockResponse(data), ...props }
}
