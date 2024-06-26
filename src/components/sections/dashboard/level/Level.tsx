import { Box, Button, Divider, Paper, Stack, Typography, alpha, useTheme } from '@mui/material';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ReactElement, useRef, useState } from 'react';
import LevelChart from './LevelChart';
import { BarSeriesOption } from 'echarts';
import {
  GridOption,
  LegendOption,
  TooltipOption,
  XAXisOption,
  YAXisOption,
} from 'echarts/types/dist/shared.js';

const Level = (): ReactElement => {
  const theme = useTheme();
  const chartRef = useRef<EChartsReactCore | null>(null);

  const barChartColors = [theme.palette.grey[900], theme.palette.primary.main];

  const tooltip: TooltipOption = {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  };

  const grid: GridOption = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };

  const legendData: LegendOption = {
    show: false,
    data: ['Service', 'Volume'],
  };

  const seriesOption: BarSeriesOption[] = [
    {
      id: 1,
      name: 'Service',
      type: 'bar',
      stack: 'Service',
      barWidth: 15,
      emphasis: {
        focus: 'series',
      },
      data: [43, 52, 51, 57, 29, 22],
      color: barChartColors[0],
      itemStyle: {
        borderRadius: 4,
      },
    },
    {
      id: 2,
      name: 'Volume',
      type: 'bar',
      stack: 'Service',
      barWidth: 15,
      emphasis: {
        focus: 'series',
      },
      data: [44, 55, 36, 22, 32, 44],
      color: barChartColors[1],
      itemStyle: {
        borderRadius: 4,
      },
    },
  ];

  const xAxis: XAXisOption[] = [
    {
      type: 'category',
      show: false,
      axisTick: { show: false },
      data: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'],
    },
  ];

  const yAxis: YAXisOption[] = [
    {
      type: 'value',
      show: false,
    },
  ];

  const onChartLegendSelectChanged = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  const [levelType, setLevelType] = useState<any>({
    Service: false,
    Volume: false,
  });

  const toggleClicked = (name: string) => {
    setLevelType((prevState: any) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <Paper sx={{ p: 3.5, minHeight: 201, height: 1 }}>
      <Typography variant="h4" color="common.white">
        Level
      </Typography>
      <Box
        flex={1}
        pt={5.5}
        borderBottom={1}
        sx={{
          borderBottomColor: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <LevelChart
          chartRef={chartRef}
          sx={{ height: '115px !important' }}
          tooltip={tooltip}
          seriesData={seriesOption}
          legendData={legendData}
          grid={grid}
          xAxis={xAxis}
          yAxis={yAxis}
        />
      </Box>
      <Stack
        direction="row"
        justifyContent={{
          xs: 'space-evenly',
          sm: 'space-around',
          md: 'space-between',
          lg: 'space-around',
        }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: alpha(theme.palette.common.white, 0.06), height: 19 }}
          />
        }
        px={2}
        pt={3}
      >
        {Array.isArray(seriesOption) &&
          seriesOption.map((dataItem, index) => (
            <Button
              key={dataItem.id}
              variant="text"
              onClick={() => {
                toggleClicked(dataItem.name as string);
                onChartLegendSelectChanged(dataItem.name as string);
              }}
              sx={{
                justifyContent: 'flex-start',
                p: 0.5,
                borderRadius: 1,
                opacity: levelType[`${dataItem.name}`] ? 0.5 : 1,
                gap: 1,
                alignItems: 'baseline',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
              disableRipple
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  bgcolor: levelType[`${dataItem.name}`]
                    ? 'background.default'
                    : barChartColors[index],
                  borderRadius: 400,
                }}
              ></Box>
              <Typography variant="body1" color="text.disabled" flex={1} textAlign={'left'}>
                {dataItem.name}
              </Typography>
            </Button>
          ))}
      </Stack>
    </Paper>
  );
};

export default Level;
