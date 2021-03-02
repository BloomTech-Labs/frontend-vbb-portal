import React from 'react';
// import { connect } from 'react-redux';
import { Button, List, Avatar } from 'antd';
import { DollarOutlined, SafetyOutlined, LaptopOutlined, WifiOutlined, SoundOutlined, BookOutlined } from '@ant-design/icons';

export const Step4 = (props) => {

  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <div>
      <h3>Support your mentee with a gift!</h3>
      <div style={{ padding: '25px 0' }}>
      <h5>Just $5/month will afford your mentee:</h5>
      <List style={{ paddingBottom: '25px' }}>
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
      <Button type="primary" href='https://www.villagebookbuilders.org/donate/'>
        Donate
        <DollarOutlined />
      </Button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
  
// })

// export default connect(mapStateToProps)(Step4)
export default Step4;