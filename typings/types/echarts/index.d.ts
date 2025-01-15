declare module 'echarts' {
  interface ECharts {
    setOption(option: any): void;
    dispose(): void;
  }

  interface EChartsComponent {
    init(
      callback: (canvas: any, width: any, height: any, dpr: any) => ECharts
    ): any;
  }
}