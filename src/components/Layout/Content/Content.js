import { Layout } from 'antd';
import React from "react"
import Table from "./Table/Table"

const { Content } = Layout;

const content = () => {
    return (
        <Content
            className="site-layout-sub-header-background" style={{ padding: 0 }}
            >
                <Table />
        </Content>
    );
  }

  export default content