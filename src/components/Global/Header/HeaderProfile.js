import { Avatar, Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';

const HeaderProfile = ({ details, logout }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button type="link" className="d-flex align-items-center px-0">
            <UserOutlined className="text-blue" />
            <p className="fnt-msrt fnt-xs fnt-500 ml-3 text-blue">Profile</p>
          </Button>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Button
          type="link"
          className="d-flex align-items-center px-0"
          onClick={logout}
        >
          <LogoutOutlined className="text-blue" />
          <p className="fnt-msrt fnt-xs fnt-500 ml-3 text-blue">Logout</p>
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id="userMenu">
      <Dropdown
        align="left"
        overlay={menu}
        trigger={['click']}
        className="mr-3"
        getPopupContainer={() => document.getElementById('userMenu')}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Avatar
            src={details && details.user && details.user.imageUrl}
            className="text-uppercase mr-2 bg-primary"
            size={{
              xs: 30,
              sm: 30,
              md: 30,
              lg: 30,
              xl: 30,
              xxl: 30
            }}
          >
            {details && details.user && details.user.imageUrl === null
              ? details.user.name.slice(0, 1)
              : null}
          </Avatar>
          <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderProfile;
