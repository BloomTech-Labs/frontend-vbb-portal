import React from 'react'
// import { connect } from 'react-redux'
import { Steps, Card } from 'antd';
import { IdcardOutlined, InfoCircleOutlined, FormOutlined, GiftOutlined, TeamOutlined, CheckOutlined } from '@ant-design/icons';

export const ProgressBar = (props) => {
    const { Step } = Steps;

    console.log("Progress bar props:", props)

    const progressBarStatus = (step) => {
        if(props.currentStep > step) {
            return "wait"
        } else if (props.currentStep == step) {
            return 'process';
        } else {
        return 'finish';
        }
    }

    return (
        <Card style={{ marginBottom: '50px'}}>
            <h1 style={{ padding: '10px 0'}}>Mentor Registration</h1>
            <Steps style={{}} responsive='true'>
                <Step status="wait" title="Step 1" icon={<IdcardOutlined />} />
                <Step status={progressBarStatus(2)} title="Step 2" icon={<InfoCircleOutlined />} />
                <Step status={progressBarStatus(3)} title="Step 3" icon={<FormOutlined />} />
                <Step status={progressBarStatus(4)} title="Step 4" icon={<GiftOutlined />} />
                <Step status={progressBarStatus(5)} title="Step 5" icon={<TeamOutlined />} />
                <Step status={progressBarStatus(6)} title="Complete" icon={<CheckOutlined />} />
            </Steps>
        </Card>
    )
}

// const mapStateToProps = (state) => ({
    
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
export default ProgressBar;
