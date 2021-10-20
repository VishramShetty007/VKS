import CountUp from 'react-countup';
import style from './report.module.scss';

const ReportItem = ({ title, count, color }) => {
  return (
    <div className={style.reportCard}>
      <p className={style.reportTitle}>{title}</p>
      <CountUp
        className={style.count}
        style={{ color: `${color}` }}
        end={count}
        duration={1}
      />
    </div>
  );
};
export default ReportItem;
