import { Layout } from 'antd';
import Header from './Header/Header';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import React from "react"

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