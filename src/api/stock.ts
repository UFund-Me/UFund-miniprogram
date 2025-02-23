import { StockIndexQuotes, StockQuotes } from "stock";
import { get } from "../utils/request";

const baseUrl = "http://api.maiwei-ai.site/api";

// 获取股票指数行情
export const getStockIndexQuotes = () =>
  get<StockIndexQuotes[]>(`${baseUrl}/stock-index/list`);

// 获取股票行情
export const getStockQuotes = () =>
  get<StockQuotes[]>(`${baseUrl}/stock-quotes/list`);
