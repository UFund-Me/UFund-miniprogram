import {  ECharts, EChartsComponent } from 'echarts';

// @ts-ignore
import * as echarts from '../../lib/ec-canvas/echarts';

Component({
  properties: {
    option: {
      type: Object,
      value: {}
    }
  },

  observers: {
    'option': function() {
      if (!this.data.isLoaded) return;

      this.updateChart();
    }
  },

  // @ts-ignore
  ecComponent: null,
  chart: null,

  data: {
    ec: {
      lazyLoad: true
    },

    isLoaded: false,
    isDisposed: false
  },

  lifetimes: {
    attached() {
      this.ecComponent = this.selectComponent('#ec-charts') as any;
      this.initialize();
    }
  },

  methods: {
    initialize() {
      const ecComponent = this.ecComponent as unknown as EChartsComponent;

      if (!ecComponent) return;

      ecComponent.init((canvas: any, width: any, height: any, dpr: any) => {
        console.log('11111111111111', canvas, width, height, dpr)

        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        }) as ECharts;
  
        this.chart = chart as any;

        this.setData({
          isLoaded: true,
          isDisposed: false
        }, () => {
          this.updateChart();
        });

        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      })
    },
    
    updateChart() {
      const option = this.data.option;
      const chart = this.chart as unknown as ECharts;

      console.log('11111111111111', chart, option)

      if (!chart || !option) return;

      chart.setOption(option);
    },
  }
})