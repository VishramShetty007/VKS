import style from './deviceDepth.module.scss';
import ByRegion from './Graphs/ByRegion';

const DeviceDepth = () => {
  return (
    <div className={`${style.DDStatusList} p-0`}>
      <ByRegion />
    </div>
  );
};

export default DeviceDepth;
