import style from './authlayout.module.scss';
import LeftLogo from 'assets/new/lg.svg';

const OnboardLeftPanel = () => {
  return (
    <div className={`${style.sliderContent} col-lg-6 p-0`}>
      <img className={`${style.imageLG}`} src={LeftLogo} alt="leftimage" />
    </div>
  );
};

export default OnboardLeftPanel;
