import Toast from "@vant/weapp/toast/toast";

import { getStockIndex } from "../../api/stock";

Page({
  data: {
    // 指数列表
    list: [],
    // 当前选中的指数
    activeCodes: []
  },

  onLoad() {
    this.init();
  },

  handleCodeChange(e) {
    this.setData({
      activeCodes: e.detail
    });
  },

  init() {
    getStockIndex().then(res => {
      if (!res.success) {
        Toast.fail("获取指数失败");
      }

      this.setData({
        list: res.data,
        activeCodes: [res.data[0].code]
      });
    });
  },

  onShareAppMessage() {}
});
