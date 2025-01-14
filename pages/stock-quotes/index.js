import Toast from "@vant/weapp/toast/toast";

import { getStockQuotes } from "../../api/stock";

Page({
  data: {
    // 股票列表
    list: [],

    // 当前选中的股票
    activeCodes: []
  },

  onShow() {
    this.init();
  },

  handleCodeChange(e) {
    this.setData({
      activeCodes: e.detail
    });
  },

  init() {
    Toast.loading({
      forbidClick: true
    });

    getStockQuotes()
      .then(res => {
        if (!res.success) {
          Toast.fail("获取股票行情失败");
        }

        this.setData({
          list: res.data,
          activeCodes: [res.data[0].code]
        });

        Toast.clear();
      })
      .catch(() => {
        Toast.clear();
      });
  },

  onShareAppMessage() {
    return {
      title: "UFund - 股票行情",
      path: "/pages/stock-quotes/index"
    };
  }
});
