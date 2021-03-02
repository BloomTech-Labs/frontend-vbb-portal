import React from 'react'
// import { connect } from 'react-redux'
import { Steps } from 'antd';
import { IdcardOutlined, InfoCircleOutlined, FormOutlined, GiftOutlined, TeamOutlined, CheckOutlined } from '@ant-design/icons';

export const ProgressBar = (props) => {
    const { Step } = Steps;

    return (
        <div>
            <Steps style={{ margin: '16px 0' }} >
                <Step status="finish" title="Step 1" icon={<IdcardOutlined />} />
                <Step status="finish" title="Step 2" icon={<InfoCircleOutlined />} />
                <Step status="process" title="Step 3" icon={<FormOutlined />} />
                <Step status="wait" title="Step 4" icon={<GiftOutlined />} />
                <Step status="wait" title="Step 5" icon={<TeamOutlined />} />
                <Step status="wait" title="Complete" icon={<CheckOutlined />} />
            </Steps>
        </div>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
export default ProgressBar;
