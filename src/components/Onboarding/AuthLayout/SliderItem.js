import { Desc, Heading } from "components/Global/Typography";
import { memo } from "react";
import style from "./authlayout.module.scss";

const SliderItem = ({ title = "", desc = "", img }) => {
  return (
    <div className={style.sliderItem}>
      <figure className={style.sliderImgWrapper}>
        <img className={style.sliderImg} src={img} alt="" />
      </figure>
      <div className={style.sliderItemContent}>
        <Heading classList="mb-3 text-white" text={title} />
        <Desc classList="text-white" text={desc} />
      </div>
    </div>
  );
};

export default memo(SliderItem);
