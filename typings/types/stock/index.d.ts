declare module 'stock' {
  interface StockRealtime {
    amplitude: number
    basicEps: number
    bvps: number
    changeRate: number
    code: string
    createdAt: string
    date: string
    dealAmount: number
    debtAssetRatio: number
    dtsyl: number
    freeCap: number
    freeShares: number
    highPrice: number
    id: string
    industry: string
    listingDate: string
    lowPrice: number
    name: string
    netprofitYoyRatio: number
    newPrice: number
    openPrice: number
    parentNetprofit: number
    pbnewmrq: number
    pe: number
    pe9: number
    perCapitalReserve: number
    perUnassignProfit: number
    preClosePrice: number
    reportDate: string
    roeWeight: number
    saleGpr: number
    speedIncrease: number
    speedIncrease5: number
    speedIncrease60: number
    speedIncreaseAll: number
    toiYoyRatio: number
    totalMarketCap: number
    totalOperateIncome: number
    totalShares: number
    ts: string
    turnoverRate: number
    updatedAt: string
    upsDowns: number
    volume: number
    volumeRatio: number
  }

  interface StockIndexItem extends StockRealtime {}

  interface StockQuotesItem extends StockRealtime {}

  interface StockIndex {
    code: string
    name: string;
    latest: StockIndexItem,
  }

  interface StockQuotes {
    code: string
    name: string;
    latest: StockQuotesItem,
  }
}