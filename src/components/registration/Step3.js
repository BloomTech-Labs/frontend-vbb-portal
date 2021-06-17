import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../redux/actions';
import { Button, List, Avatar, Row, Col, Image } from 'antd';
import {
  SafetyOutlined,
  LaptopOutlined,
  WifiOutlined,
  SoundOutlined,
  BookOutlined,
} from '@ant-design/icons';
import ActionPicture from '../../images/vbb-in-action.png';

import '../../less/index.less';

export const Step3 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <div className="padding-bottom-25">
      <Row>
        <Col xs={24} sm={24} md={24} lg={16} xl={12}>
          <List className="padding-25-0">
            <h3 className="padding-0-0-25-25">
              Just $5 / month will afford your mentee:
            </h3>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="background-color-FFFFF6"
                    icon={<SafetyOutlined />}
                  />
                }
                title="A safe learning environment"
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="background-color-FFFFF6"
                    icon={<LaptopOutlined />}
                  />
                }
                title="Regular access to a computer"
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="background-color-FFFFF6"
                    icon={<WifiOutlined />}
                  />
                }
                title="WiFi connection"
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="background-color-FFFFF6"
                    icon={<SoundOutlined />}
                  />
                }
                title="Headphones"
              />
            </List.Item>
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="background-color-FFFFF6"
                    icon={<BookOutlined />}
                  />
                }
                title="Khan Academy's award-winning educational programs"
              />
            </List.Item>
          </List>
          <Button type="primary" href="/donate/">
            Donate
          </Button>
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={12}>
          <div className="padding-0-10">
            <Image src={ActionPicture}></Image>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// const mapStateToProps = (state) => ({

// })

// export default connect(mapStateToProps)(Step4)
export default Step3;
