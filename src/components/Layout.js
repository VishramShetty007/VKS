import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, Menu, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ViasatLogo from 'assets/new/VKS.png';
import useWindowSize from 'Hooks/useWindowSize';
import {
  FireOutlined,
  AppstoreAddOutlined,
  SearchOutlined
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import Dropdown1 from './Global/DropDown/DropDown1';
import Dropdown2 from './Global/DropDown/DropDown2';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const BlogPage = React.lazy(() => import('pages/BlogPage'));

const Layout1 = ({ children }) => {
  const { width } = useWindowSize();
  const { Header, Content, Sider } = Layout;
  const [collapsed, setcollapsed] = useState(true);
  const [layoutHeader, setlayoutHeader] = useState(
    window.location.hash.split('/')[1]
  );

  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (width <= 600) {
      setcollapsed(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <main>
        <div>
          <Layout>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={onCollapse}
              style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0
              }}
            >
              {collapsed ? (
                <img
                  src={ViasatLogo}
                  className="mb-2 mt-3"
                  style={{ width: 30, height: 30, marginLeft: 18 }}
                  alt="Logo"
                />
              ) : (
                <div style={{ height: 35, width: 140, marginBottom: 20 }}>
                  <p className="text-center fnt-lg fnt-600 fnt-barlow pt-3">
                    VKS
                  </p>
                </div>
              )}

              <Menu
                theme="light"
                defaultSelectedKeys={window.location.hash.split('/')[1]}
                mode="vertical"
                onClick={(e) => {
                  if (e.key != null) {
                    setlayoutHeader(e.key);
                  }
                }}
              >
                <Menu.Item
                  key="dashboard"
                  icon={<FireOutlined style={{ fontSize: 24 }} />}
                >
                  <Link className="MenuLink" to="dashboard">
                    Dashboard
                  </Link>
                </Menu.Item>
                <Menu.Item
                  key="blog"
                  icon={<AppstoreAddOutlined style={{ fontSize: 24 }} />}
                >
                  <Link className="MenuLink" to="blog">
                    Blog
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout
              style={
                collapsed ? { marginLeft: '80px' } : { marginLeft: '200px' }
              }
            >
              <Header
                className="site-layout-sub-header-background"
                style={
                  collapsed
                    ? {
                        padding: 0,
                        overflow: 'auto',
                        position: 'fixed',
                        top: 0,
                        width: `calc(100% - 80px)`,
                        boxShadow: '0 10px 16px rgba(0, 0, 0, 0.05)',
                        zIndex: 100,
                        height: '80px'
                      }
                    : {
                        width: `calc(100% - 200px)`,
                        padding: 0,
                        overflow: 'auto',
                        position: 'fixed',
                        top: 0,
                        boxShadow: '0 10px 16px rgba(0, 0, 0, 0.05)',
                        zIndex: 100,
                        height: '80px'
                      }
                }
                children={
                  layoutHeader && (
                    <div className="d-flex align-items-center p-2 justify-content-between">
                      <p className="fnt-lato-head text-uppercase fnt-700 fnt-lg ml-4 pt-2 mb-0">
                        <Search
                          className="customSearch"
                          placeholder="Search"
                          allowClear
                          prefix={<SearchOutlined />}
                        />
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <Dropdown2 />
                        </div>
                        <Divider
                          style={{
                            height: 40,
                            borderLeft: '1px solid #e3e3e3'
                          }}
                          type="vertical"
                        />
                        <Dropdown1 />
                      </div>
                    </div>
                  )
                }
              />
              <Content style={{ margin: '106px 24px 0' }}>
                <Switch>
                  <Route exact path="/dashboard" component={DashboardPage} />
                  <Route exact path="/blog" component={BlogPage} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      </main>
    </>
  );
};

export default Layout1;
