import style from './footer.module.scss';
import FooterMenu from './FooterMenu';

const Footer = () => {
  return (
    <footer>
      <section className={style.contentWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <p
                className="fnt-msrt fnt-700 fnt-lg ml-5"
                style={{ color: '#fff' }}
              >
                VKS
              </p>
            </div>
          </div>
          <FooterMenu />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
