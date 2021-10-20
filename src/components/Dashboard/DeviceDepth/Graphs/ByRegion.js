import React, { Component } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import style from '../deviceDepth.module.scss';
import { Col } from 'antd';

am4core.useTheme(am4themes_animated);

class ByRegion extends Component {
  chart;
  state = {
    value: 'set1',
    chartData: [
      {
        type: 'Posted',
        value: 3600,
        color: am4core.color('#6b8ed3')
      },
      {
        type: 'Added',
        value: 1200,
        color: am4core.color('#343F56')
      },
      {
        type: 'Comment',
        value: 1000,
        color: am4core.color('#f46b6b')
      }
    ]
  };

  XYChartGenerator(data) {
    am4core.options.autoSetClassName = true;
    let chart = am4core.create('ByRegionXYChart', am4charts.PieChart);

    // Add data
    chart.data = this.state.chartData;
    chart.responsive.enabled = true;
    // Add and configure PieSeries
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'value';
    pieSeries.dataFields.category = 'type';
    pieSeries.slices.template.propertyFields.fill = 'color';
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.slices.template.cornerRadius = 1;
    pieSeries.tooltip.disabled = true;

    // LEGEND
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
    chart.legend.labels.template.fill = am4core.color('#1e2e3b');
    chart.legend.itemContainers.template.clickable = false;
    chart.legend.itemContainers.template.focusable = false;
    chart.legend.itemContainers.template.cursorOverStyle =
      am4core.MouseCursorStyle.default;
    var markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 12;
    markerTemplate.height = 12;

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
        <h3 className="fnt-lato fnt-mlg fnt-500 pb-3">Users by device</h3>
        <div
          id="ByRegionXYChart"
          className="chart"
          style={{ height: 300 }}
        ></div>
      </Col>
    );
  }
}

export default ByRegion;
