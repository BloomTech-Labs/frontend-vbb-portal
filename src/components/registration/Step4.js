import React from 'react';
// import { connect } from 'react-redux';
import { Button, List, Avatar, Alert, Space } from 'antd';
import { DollarOutlined, SafetyOutlined, LaptopOutlined, WifiOutlined, SoundOutlined, BookOutlined } from '@ant-design/icons';

export const Step4 = (props) => {

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div style={{ paddingBottom: '25px' }}>
      <Alert
        message="Support your mentee with a gift! Just $5/month will afford your mentee:"
        type="info"
      />
      <List style={{ padding: '25px 0' }}>
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar style={{backgroundColor: 'orange'}} icon={<SafetyOutlined />}/>}
            title='A safe learning environment'
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar style={{backgroundColor: 'orange'}} icon={<LaptopOutlined />}/>}
            title='Regular access to a computer'
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar style={{backgroundColor: 'orange'}} icon={<WifiOutlined />}/>}
            title='WiFi connection'
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar style={{backgroundColor: 'orange'}} icon={<SoundOutlined />}/>}
            title='Headphones'
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={ <Avatar style={{backgroundColor: 'orange'}} icon={<BookOutlined />}/>}
            title="Khan Academy's award-winning educational programs"
          />
        </List.Item>
      </List>
      <Button type="primary" href='https://www.villagebookbuilders.org/donate/' target="_blank">
        Donate
        <DollarOutlined />
      </Button>
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step4)
export default Step4;