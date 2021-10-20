import Report from 'components/Dashboard/Report/Report';
import DeviceOverView from 'components/Dashboard/DeviceOverView/DeviceOverView';
import ByRegion from 'components/Dashboard/DeviceDepth/Graphs/ByRegion';
import style from './page.module.scss';
import Draft from 'components/Dashboard/BottomSec/Draft';
import ByMeans from 'components/Dashboard/BottomSec/ByMeans';
import LatestPost from 'components/Dashboard/BottomSec/LatestPost';

const DashboardPage = () => {
  return (
    <>
      <div className="title_add mb-4">
        <span className="page_subtitle mb-3">Dashboard</span>
        <p className="page_title">Blog Overview</p>
      </div>
      <Report />
      <div className={`${style.graphStatusList} mt-3 mb-4 p-0`}>
        <DeviceOverView />
        <ByRegion />
      </div>
      <div className={`${style.graph2StatusList} mt-3 mb-5 p-0`}>
        <Draft />
        <LatestPost />
        <ByMeans />
      </div>
    </>
  );
};

export default DashboardPage;
