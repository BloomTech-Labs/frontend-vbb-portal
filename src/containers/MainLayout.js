//This component replaces Layout.js. We should delete Layout.js once we confirm it is no longer in use.
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Routes from './Routes';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const { Content } = Layout;

  return (
    <Layout>
      <NavBar />
      <Content
        className="site-layout"
        style={{ padding: '50px', marginTop: 64, backgroundColor: '#fffff6' }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">VBB Portal</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/signup">Mentor Registration</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 380 }}>
          <Routes />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default MainLayout;
