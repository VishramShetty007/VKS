import style from './footer.module.scss';
import FooterMenuList from './FooterMenuList';

const FooterMenu = () => {
  const prodList = [
    {
      title: 'Product Catalogue',
      link: '/'
    },
    {
      title: 'Hot Rolled Plates',
      link: '/'
    },
    {
      title: 'cold Rolled Plates',
      link: '/'
    },
    {
      title: 'Thin Sheets',
      link: '/'
    },
    {
      title: 'Automative Sheets',
      link: '/'
    }
  ];

  return (
    <section className={style.contentWrapper}>
      <div className="container">
        <div className="row">
          <FooterMenuList title="Products" list={prodList} />
        </div>
      </div>
    </section>
  );
};

export default FooterMenu;
