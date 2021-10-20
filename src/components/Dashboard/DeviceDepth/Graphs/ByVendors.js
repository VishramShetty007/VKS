import React, { Component } from 'react';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import style from '../deviceDepth.module.scss';

am4core.useTheme(am4themes_animated);

class ByVendor extends Component {
  chart;
  state = {
    value: 'set1',
    chartData: [
      {
        type: 'Cisco',
        value: 20,
        color: am4core.color('#007bff')
      },
      {
        type: 'Arista',
        value: 13,
        color: am4core.color('#f46b6b')
      },
      {
        type: 'Juiper',
        value: 9,
        color: am4core.color('#ff9c65')
      },
      {
        type: 'Fortinet',
        value: 5,
        color: am4core.color('#8373b0')
      }
    ]
  };

  XYChartGenerator(data) {
    let chart = am4core.create('ByVendorXYChart', am4charts.XYChart);

    // Add data
    chart.data = this.state.chartData;
    chart.responsive.enabled = true;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = 'type';
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = 'type';
    series.dataFields.valueX = 'value';
    series.columns.template.strokeOpacity = 0;
    series.columns.template.propertyFields.fill = 'color';
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = 'color';
    series.tooltip.label.fill = am4core.color('#fff');
    series.columns.template.tooltipText = '[bold]{valueX} Devices[/]';

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
      <div className={`${style.panel} mb-4 p-3 p-md-4`}>
        <h3
          className="fnt-lato fnt-mlg fnt-500 pb-3"
          style={{
            borderBottom: 'solid 1px #e3e3e3'
          }}
        >
          Most Used Vendors
        </h3>
        <div
          id="ByVendorXYChart"
          className="chart"
          style={{ height: 250 }}
        ></div>
      </div>
    );
  }
}

export default ByVendor;
