import React from 'react';
// import 'antd/dist/antd.css';
import { Layout, Breadcrumb, Button } from 'antd';
import fullLogo from '../images/vbb-full-logo.png';

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
                    </Button>
                    <Button key="2" type="primary" href='/signup'>
                        Register
                    </Button>
                </Header>
                <Content
                className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}
                >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Step 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Step 2</Breadcrumb.Item>
                        <Breadcrumb.Item>Step 3</Breadcrumb.Item>
                        <Breadcrumb.Item>Step 4</Breadcrumb.Item>
                        <Breadcrumb.Item>Step 5</Breadcrumb.Item>
                    </Breadcrumb>
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
