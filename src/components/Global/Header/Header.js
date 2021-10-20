import style from './header.module.scss';
import React from 'react';
import { memo, useEffect, useState } from 'react';

const Header = memo((props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const scrollCheck = window.scrollY < 10;
    if (scrollCheck !== scroll) {
      setScroll(scrollCheck);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);

  return (
    <header
      className={`${style.wrapper} ${!scroll ? style.scrolling : ''}`}
    ></header>
  );
});

export default Header;
