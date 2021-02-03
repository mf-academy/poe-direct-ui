import { Layout, Row, Col, Space, Divider } from 'antd';
import Leagues from './Leagues/Leagues';
import Add from './Add/Add';
import Signin from './Signin/Signin';
import React from "react"

const { Header } = Layout;

const header = () => {
    return (
        <Header
            className="site-layout-sub-header-background" style={{ padding: 0 }}
            >
            <Row>
                <Col span={6}><Add /></Col>
                <Col span={6}></Col>
                <Col span={6}></Col>
                <Col span={6}><Space><Leagues /><Divider type="vertical" /><Signin /></Space></Col>
            </Row>
        </Header>
    );
  }

  export default header