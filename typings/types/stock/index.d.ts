declare module "stock" {
  interface StockIndexQuotes {
    // 基础信息
    date: string; // 交易日期
    code: string; // 指数代码
    name: string; // 指数名称

    // 核心价格指标
    newPrice: number; // 最新价
    openPrice: number; // 今开
    highPrice: number; // 最高
    lowPrice: number; // 最低
    preClosePrice: number; // 昨收

    // 成交指标
    changeRate: number; // 涨跌幅
    upsDowns: number; // 涨跌额
    volume: number; // 成交量
    dealAmount: number; // 成交额
    amplitude: number; // 振幅
    turnoverRate: number; // 换手率
    volumeRatio: number; // 量比
  }

  interface StockQuotes {
    // 基本信息
    date: string;
    code: string;
    name: string;

    // 价格相关
    newPrice: number;
    changeRate: number;
    upsDowns: number;

    // 交易指标
    volume: number;
    dealAmount: number;
    amplitude: number;
    turnoverRate: number;
    volumeRatio: number;
    openPrice: number;
    highPrice: number;
    lowPrice: number;
    preClosePrice: number;

    // 涨跌速度指标
    speedIncrease: number;
    speedIncrease5: number;
    speedIncrease60: number;
    speedIncreaseAll: number;

    // 估值指标
    dtsyl: number;
    pe9: number;
    pe: number;
    pbnewmrq: number;
    basicEps: number;
    bvps: number;
    perCapitalReserve: number;
    perUnassignProfit: number;

    // 财务指标
    roeWeight: number;
    saleGpr: number;
    debtAssetRatio: number;
    totalOperateIncome: number;
    toiYoyRatio: number;
    parentNetprofit: number;
    netprofitYoyRatio: number;

    // 股本及市值
    totalShares: number;
    freeShares: number;
    totalMarketCap: number;
    freeCap: number;

    // 其他
    industry: string;
    listingDate: string;
    reportDate: string;
  }
}
