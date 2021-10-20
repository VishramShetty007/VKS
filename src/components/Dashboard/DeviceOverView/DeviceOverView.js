import React, { Component } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import ChartHead from './ChartHead';
import { Col } from 'antd';

import style from './device.module.scss';

am4core.useTheme(am4themes_animated);

class DeviceOverView extends Component {
  state = {
    value: 'set1',
    chartData: {
      // Daily
      set1: [
        {
          year: '10',
          New: 10,
          Active: 30,
          Inactive: 30,
          Error: 21
        },
        {
          year: '20',
          New: 25,
          Active: 35,
          Inactive: 35,
          Error: 4
        },
        {
          year: '30',
          New: 60,
          Active: 20,
          Inactive: 20,
          Error: 3
        },
        {
          year: '35',
          New: 100,
          Active: 60,
          Inactive: 60,
          Error: 5
        },
        {
          year: '45',
          New: 50,
          Active: 20,
          Inactive: 20,
          Error: 8
        },
        {
          year: '65',
          New: 20,
          Active: 25,
          Inactive: 25,
          Error: 9
        },
        {
          year: '70',
          New: 60,
          Active: 70,
          Inactive: 70,
          Error: 10
        },
      ]
    }
  };

  XYChartGenerator(data) {
    am4core.options.autoSetClassName = true;
    var chart = am4core.create('ProductsXYChart', am4charts.XYChart);
    // SET OF DATA
    chart.data = data[this.state.value];
    chart.responsive.enabled = true;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'year';
    categoryAxis.title.text = '';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.cellStartLocation = 0.2;
    categoryAxis.renderer.cellEndLocation = 0.8;
    categoryAxis.renderer.grid.template.disabled = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.title.text = '';
    valueAxis.renderer.grid.template.strokeDasharray = '10,10';
    valueAxis.renderer.grid.template.fill = am4core.color('#d3d8dd');

    // Create series
    function createSeries(field, name, stacked, fill) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = field;
      series.dataFields.categoryX = 'year';
      series.name = name;
      series.columns.template.fill = am4core.color('#fff');
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color('#000');
      series.tooltip.label.fill = am4core.color('#fff');
      series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
      series.stacked = stacked;
      series.columns.template.width = am4core.percent(95);
      series.columns.template.fill = am4core.color(fill);
      series.stroke = am4core.color(fill);
      //   Radius
      var columnTemplate = series.columns.template;
      columnTemplate.strokeOpacity = 0;
    }

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.labels.template.fill = am4core.color('#1e2e3b');
    chart.legend.contentAlign = 'left';
    chart.legend.marginTop = -25;
    chart.legend.marginBottom = 40;
    chart.legend.itemContainers.template.clickable = true;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle =
      am4core.MouseCursorStyle.default;
    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 12;
    markerTemplate.height = 12;

    createSeries('New', 'New Blogs', false, '#1882ff');
    createSeries('Inactive', 'Old Blogs', false, '#F46B6B');

    return chart;
  }
  componentDidMount() {
    this.chart = this.XYChartGenerator(this.state.chartData);
  }

  selectDataset = (e) => {
    this.chart.data = this.state.chartData[e];
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <Col className={`${style.panel} p-3 p-md-5`} sm={24} md={24}>
        <ChartHead
          title="Devices Overview"
          selectDataset={(e) => this.selectDataset(e)}
        />
        <div
          id="ProductsXYChart"
          style={{ height: 300 }}
          className="chart"
        ></div>
      </Col>
    );
  }
}

export default DeviceOverView;
