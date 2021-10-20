import style from './loader.module.scss';

import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className={style.wrapper}>
            <div className={style.content}>
              <LoadingOutlined />
              <p className="fnt-md fnt-msrt fnt-600 text-capitalize text-blue">
                loading
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
