import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Routes from './Routes';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AdminSearch from '../components/Admin/AdminSearch';

import '../less/index.less';

const MainLayout = () => {
  const { Content } = Layout;

  return (
    <div>
      <Layout>
        <NavBar />
        <AdminSearch />
        <Content className="padding-50 background-color-FFFFF6">
          <Breadcrumb className="margin-16-0">
            <Breadcrumb.Item>
              <Link to="/">Village Portal</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/calendar/">Calendar</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="padding-24 min-height-380">
            <Routes />
          </div>
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};
export default MainLayout;
