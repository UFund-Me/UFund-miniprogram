import { get } from "../utils/request";

const baseUrl = "https://tradersignal.org/api";

// 获取股票指数
export const getStockIndex = () => get<Stock.StockIndex[]>(`${baseUrl}/stock-index/list`);

// 获取股票行情
export const getStockQuotes = () => get<Stock.StockQuotes[]>(`${baseUrl}/stock-quotes/list`);
