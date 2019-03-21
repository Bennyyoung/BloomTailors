import React from 'react';
import { Card, Col, Row, Tabs, Avatar } from 'antd';
import { NavLink } from 'react-router-dom';


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}


const IndividualTailor = () => {
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <Avatar size={100} icon="user" style={{marginTop: "5px"}}/>
                <h1>Meet Tailor Zack</h1>
                <NavLink to="#" style={{color: "red"}}>Report This user</NavLink>
            </div>

            <div>
                <Col span={8}>
                    <Row gutter={16}>
                        <Card title="Verified Info" bordered={false}>
                            <p>National Identity Card</p>
                            <p>Email Address</p>
                            <p>Phone number</p>
                            <NavLink to="#">Verify more info</NavLink>
                        </Card>
                        
                    </Row>
                    
                    <Row gutter={16}>
                        <Card title="Connected Account" bordered={false}>
                            <NavLink to="#">Facebook</NavLink><br />
                            <NavLink to="#">Instagram</NavLink><br />
                            <NavLink to="#">Twitter</NavLink>
                        </Card>   
                    </Row>

                    <Row gutter={16}>
                        <Card title="About Me" bordered={false}>
                            <p>School</p>
                            <p>Work</p>
                            <p>Language</p>
                        </Card>
                    </Row>
                </Col>
            </div>
            

            <div style={{paddingTop: "15px"}}>
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Gallery" key="1">Content from Gallery</TabPane>
                    <TabPane tab="Works" key="2">Content from Works</TabPane>
                    <TabPane tab="Accessories" key="3">Content Accessories</TabPane>
                </Tabs>
            </div>
            
        </div>
    )
}

export default IndividualTailor