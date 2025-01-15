import { EChartsComponent, ECharts } from 'echarts';

// @ts-ignore
import * as echarts from '../../lib/ec-canvas/echarts';

interface IPageData {
  ec: {
    lazyLoad: boolean;
  }
}

interface IPageInstance {
  data: IPageData;
  ecComponent: EChartsComponent | null;
  chart: ECharts | null;
  initChart: () => void;
  setChartOption: (chart: ECharts) => void;
}

Page<IPageData, IPageInstance>({
  data: {
    ec: {
      lazyLoad: true
    }
  },

  ecComponent: null,
  chart: null,

  setChartOption(chart: ECharts) {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['热度', '正面', '负面']
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#666'
          }
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#666'
          }
        }
      ],
      series: [
        {
          name: '热度',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [300, 270, 340, 344, 300, 320, 310],
          itemStyle: {
          
          }
        },
        {
          name: '正面',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true
            }
          },
          data: [120, 102, 141, 174, 190, 250, 220],
          itemStyle: {
            // emphasis: {
            //   color: '#32c5e9'
            // }
          }
        },
        {
          name: '负面',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'left'
            }
          },
          data: [-20, -32, -21, -34, -90, -130, -110],
          itemStyle: {
            // emphasis: {
            //   color: '#67e0e3'
            // }
          }
        }
      ]
    };
    chart.setOption(option);
  },

  onReady() {
    this.ecComponent = this.selectComponent('#mychart-dom-bar') as unknown as EChartsComponent
  },

  onLoad() {
    setTimeout(() => {
      this.initChart();
    }, 300);

  },

  initChart() {
    console.log(this.ecComponent, '1111111111111')

    if (!this.ecComponent) return;

    this.ecComponent.init((canvas: any, width: any, height: any, dpr: any) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      }) as ECharts;

      this.setChartOption(chart);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      this.setData({
        isLoaded: true,
        isDisposed: false
      });

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    })
  },

  onShareAppMessage() {
  }
})