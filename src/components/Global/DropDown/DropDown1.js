import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const menu = (
  <Menu>
    <Menu.Item>
      <Link className="fnt-barlow m-0 p-0 fnt-500 fnt-sm" to="dashboard">
        Profile Details
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link className="fnt-barlow m-0 p-0 fnt-500 fnt-sm" to="/">
        Logout
      </Link>
    </Menu.Item>
  </Menu>
);

const Dropdown1 = () => {
  return (
    <Dropdown overlay={menu} className="ml-2 mr-2">
      <p>
        <Avatar
          src="https://joeschmoe.io/api/v1/random"
          className="avaIMGProf"
        />
        <DownOutlined className="ml-3" />
      </p>
    </Dropdown>
  );
};

export default Dropdown1;
