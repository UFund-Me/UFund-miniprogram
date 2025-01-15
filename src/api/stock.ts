import { StockIndex, StockQuotes } from 'stock'
import { get } from "../utils/request";

const baseUrl = "https://tradersignal.org/api";

// 获取股票指数
export const getStockIndex = () => get<StockIndex[]>(`${baseUrl}/stock-index/list`);

// 获取股票行情
export const getStockQuotes = () => get<StockQuotes[]>(`${baseUrl}/stock-quotes/list`);
