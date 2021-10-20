import ReportItem from './ReportItem';
import { Col } from 'antd';
import style from './report.module.scss';

const Reports = [
  {
    count: `2501`,
    title: 'POSTS',
    color: '#3d5170'
  },
  {
    count: `1078`,
    title: 'PAGES',
    color: '#3d5170'
  },
  {
    count: `500`,
    title: 'COMMENTS',
    color: '#3d5170'
  },
  {
    count: `26`,
    title: 'NEW CUSTOMERS',
    color: '#3d5170'
  },
  {
    count: '17281',
    title: 'SUBSCRIBERS',
    color: '#3d5170'
  }
];

const Report = () => {
  return (
    <Col className={`p-0`} sm={24} md={24}>
      <li className={`p-0 ${style.liwrapper}`}>
        {Reports.map(({ title, count, color }, index) => (
          <ReportItem
            key={`Report${index}`}
            title={title}
            color={color}
            count={count}
          />
        ))}
      </li>
    </Col>
  );
};

export default Report;
