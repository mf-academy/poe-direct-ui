import { UserOutlined } from "@ant-design/icons"
import { useQuery } from '@apollo/client';
import { Layout, Menu } from 'antd';
import GetCategories from '../../../graphql/Queries/Categories'
import React from "react"

const { Sider } = Layout;

const Sidebar = () => {
    const { loading, error, data } = useQuery(GetCategories);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        console.log(data)

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            style={{
                height: '100vh'
            }}
        >
                  <div className="logo" />

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {
                    data.Categories.map(({id, name}) => (
                        <Menu.Item key={id} icon={<UserOutlined />}>
                        {name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
  }

  export default Sidebar