import { ReactElement, useMemo } from 'react';
import * as echarts from 'echarts';
import { LineSeriesOption } from 'echarts';
import ReactEChart from 'components/base/ReactEChart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { SxProps, useTheme } from '@mui/material';
import {
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import { stone } from 'theme/colors';

type CustomerFulfillmentChartProps = {
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
  data?: any;
  sx?: SxProps;
};

type CustomerFulfillmentChartOptions = echarts.ComposeOption<
  LineSeriesOption | LegendComponentOption | TooltipComponentOption | GridComponentOption
>;

const CustomerFulfillmentChart = ({
  chartRef,
  data,
  ...rest
}: CustomerFulfillmentChartProps): ReactElement => {
  const theme = useTheme();
  const option: CustomerFulfillmentChartOptions = useMemo(
    () => ({
      color: [theme.palette.secondary.main, theme.palette.primary.main],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
      },
      legend: {
        show: false,
        data: ['This Month', 'Last Month'],
      },
      grid: {
        top: '0%',
        right: '2%',
        bottom: '-13%',
        left: '-15%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          show: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          show: false,
        },
      ],
      series: [
        {
          id: 1,
          name: 'This Month',
          type: 'line',
          stack: 'Total',
          lineStyle: {
            width: 2,
          },
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 5,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: stone[800],
              },
              {
                offset: 0,
                color: theme.palette.secondary.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data['This Month'],
        },
        {
          id: 2,
          name: 'Last Month',
          type: 'line',
          stack: 'Total',
          lineStyle: {
            width: 2,
          },
          showSymbol: true,
          symbol: 'circle',
          symbolSize: 5,
          areaStyle: {
            opacity: 0.75,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
              {
                offset: 1,
                color: stone[800],
              },
              {
                offset: 0,
                color: theme.palette.primary.main,
              },
            ]),
          },
          emphasis: {
            focus: 'series',
          },
          data: data['Last Month'],
        },
      ],
    }),
    [],
  );

  return <ReactEChart ref={chartRef} option={option} echarts={echarts} {...rest} />;
};

export default CustomerFulfillmentChart;