import { useMemo, useState, useCallback, ReactNode } from 'react'
import StockContext from './Context'

interface IStockProvider {
  children?: ReactNode
}

const StockProvider = ({ children }: IStockProvider) => {
  const [stockName, setStockName] = useState<string>('')

  const updateStockName = useCallback(
    (newStock: string) => setStockName(newStock),
    []
  )

  const value = useMemo(() => {
    return {
      // stock
      stockName,
      updateStockName
    }
  }, [stockName, updateStockName])

  return <StockContext.Provider value={value}>{children}</StockContext.Provider>
}
export default StockProvider
