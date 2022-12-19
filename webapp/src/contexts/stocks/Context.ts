import React from 'react'

interface Context {
  stockName: string
  updateStockName: (newStockName: string) => void
}

const StockContext: React.Context<Context> = React.createContext<Context>(
  {} as Context
)

export default StockContext
