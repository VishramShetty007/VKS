import useWindowSize from 'Hooks/useWindowSize';
import { useEffect } from 'react';
import style from './authlayout.module.scss';
import OnboardLeftPanel from './OnboardSlider';

const OnBoardingLayout = ({ children }) => {
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 992) {
      document.querySelector('body').style.overflow = 'hidden';
    }

    return () => {
      document.querySelector('body').style.overflow = 'auto';
    };
  }, [width]);

  return (
    <div className={style.wrapper}>
      {width > 992 && <OnboardLeftPanel />}
      <div className={style.content}>
        <div className={style.mainContent}>
          <div className="position-relative">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingLayout;
