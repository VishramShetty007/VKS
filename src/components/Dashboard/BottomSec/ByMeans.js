import React from 'react';
import { Card, Col, Select } from 'antd';

const { Option } = Select;

const data = [
  {
    title: 'GitHub',
    value: '19000'
  },
  {
    title: 'Stack Overflow',
    value: '11200'
  },
  {
    title: 'Hacker News',
    value: '900'
  },
  {
    title: 'Reddit',
    value: '8500'
  },
  {
    title: 'The Next Web',
    value: '7200'
  },
  {
    title: 'Tech Crunch',
    value: '450'
  },
  {
    title: 'YouTube',
    value: '100'
  },
  {
    title: 'Adobe',
    value: '175'
  }
];

const ByMeans = () => (
  <Card className="cardSHA h-100">
    <div className="pb-2 border-bottom">
      <h6 className="m-0">Top Referrals</h6>
    </div>
    {data &&
      data.map((item, idx) => (
        <div
          key={`abc${idx}`}
          className="col-12 p-0 pt-2 border-bottom d-flex align-items-center justify-content-between"
        >
          <p>{item.title}</p>
          <p>{item.value}</p>
        </div>
      ))}
    <div className="col-12 p-0 pt-2 d-flex align-items-center justify-content-between">
      <Col>
        <Select
          placeholder="Select"
          className="customSel"
          style={{ maxWidth: '130px' }}
        >
          <Option value="Task 1" key="Task 1">
            Last Week
          </Option>
          <Option value="Task 2" key="Task 2">
            Today
          </Option>
          <Option value="Task 3" key="Task 3">
            Last Month
          </Option>
          <Option value="Task 4" key="Task 4">
            Last Year
          </Option>
        </Select>
      </Col>

      <Col className="text-right">
        {/* eslint-disable-next-line */}
        <a href="#">Full report &rarr;</a>
      </Col>
    </div>
  </Card>
);

export default ByMeans;
