import Toast from "@vant/weapp/toast/toast";

import { getStockIndex } from "../../api/stock";

Page({
  data: {
    // 指数列表
    list: [],
    // 当前选中的指数
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

    getStockIndex().then(res => {
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
