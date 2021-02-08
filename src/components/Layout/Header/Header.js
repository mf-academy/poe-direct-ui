import { Layout, Row, Col, Space, Divider } from 'antd';
import Leagues from './Leagues/Leagues';
import Add from './Add/Add';
import Signin from './Signin/Signin';
import Collapse from './Collapse/Collapse';

import React from "react"

const { Header } = Layout;

const header = () => {
    return (
        <Header>
            <Row className="HeaderRow">
                <Col span={2}><Collapse /></Col>
                <Col span={8}><Add /></Col>
                <Col span={6}></Col>
                <Col span={6}><Space><Leagues /><Divider type="vertical" /><Signin /></Space></Col>
            </Row>
        </Header>
    );
  }

  export default header