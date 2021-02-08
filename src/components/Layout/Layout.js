import { Layout } from 'antd';
import Header from './Header/Header';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import React from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const layout = () => {
    return (
        <Layout className="Layout">
            <Sidebar />
            <Layout>
              <Header />
              <Content />
            </Layout>
        </Layout>
    );
  }

  export default layout