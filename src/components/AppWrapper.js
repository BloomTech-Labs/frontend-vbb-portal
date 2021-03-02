import React from 'react';
// import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';
import { LoginOutlined, FormOutlined } from '@ant-design/icons';
import ProgressBar from './registration/ProgressBar';
// import fullLogo from '../images/vbb-full-logo.png';

function AppWrapper(props) {
    const { Header, Footer, Content } = Layout;

    return (
        <div>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'blue' }}>
                    {/* <img
                        src={fullLogo}
                        alt="VBB logo"
                        width="100"
                    ></img> */}
                    <Button key="1" href='/signin'>
                        Sign In
                        <LoginOutlined />
                    </Button>
                    <Button key="2" type="primary" href='/signup'>
                        Register
                        <FormOutlined />
                    </Button>
                </Header>
                <Content
                className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}
                >
                    <ProgressBar />
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Village Book Builders ©2021 | All Rights Reserved</Footer>
            </Layout>
        </div>
    );
}
export default AppWrapper;
