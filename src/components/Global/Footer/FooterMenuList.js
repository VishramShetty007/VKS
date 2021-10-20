import { Link } from "react-router-dom";
import style from "./footer.module.scss";

const FooterMenuList = ({ title, list }) => {
  return (
    <div className="col-6 col-md-3 mb-4  pb-2 pb-md-0 mb-md-0">
      <h4 className={style.contentHeading}>{title}</h4>
      <ul className={style.contentList}>
        {list.map(({ title, link }, index) => (
          <li key={index}>
            <Link to={link} className={style.contentLink}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuList;
