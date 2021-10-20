import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const ChartHead = ({ title }) => {
  return (
    <div className="d-flex justify-content-between mb-2 pb-2">
      <h3 className="fnt-lato fnt-lg font-weight-500">{title}</h3>
      <RangePicker />
    </div>
  );
};

export default ChartHead;
