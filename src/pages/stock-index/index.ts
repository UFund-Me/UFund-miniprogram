import { StockIndexQuotes } from "stock";

import Toast from "@vant/weapp/toast/toast";
import { getStockIndexQuotes } from "../../api/stock";

Page({
  data: {
    // 指数列表
    list: [] as StockIndexQuotes[],
    // 当前选中的指数
    activeCodes: [] as string[]
  },

  onShow() {
    this.init();
  },

  handleCodeChange(e: any) {
    this.setData({
      activeCodes: e.detail
    });
  },

  init() {
    Toast.loading({
      forbidClick: true
    });

    getStockIndexQuotes().then(res => {
      if (!res.success) {
        Toast.fail("获取指数失败");
      }

      this.setData({
        list: res.data,
        activeCodes: [res.data[0].code]
      });

      Toast.clear();
    });
  },

  onShareAppMessage() {
    return {
      title: "UFund - 股票指数",
      path: "/pages/stock-index/index"
    };
  }
});
