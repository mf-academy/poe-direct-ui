import { Layout } from 'antd';
import React from "react"
import Table from "./Table/Table"
import Search from "./Search/Search"

const { Content } = Layout;

const content = () => {
    return (
        <Content
            className="site-layout-sub-header-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
                <Search />
                <Table />
        </Content>
    );
  }

  export default content