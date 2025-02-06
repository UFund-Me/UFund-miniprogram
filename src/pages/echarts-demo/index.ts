
Page({
  data: {
    option: null
  },

  onLoad() {
    setTimeout(() => {
      this.setChartOption();
    }, 3000);
  },

  setChartOption() {
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    };

    this.setData({
      option: option as any
    });
  },
 
  onShareAppMessage() {
  }
})