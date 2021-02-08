import { UserOutlined } from "@ant-design/icons"
import { useQuery } from '@apollo/client';
import { Layout, Menu } from 'antd';
import { Context, updateCategoryContext } from "../../../context/Context"
import GetCategories from '../../../graphql/Queries/Categories'
import React, { useContext, useEffect, useState } from "react"

const { Sider } = Layout;

const Sidebar = () => {
    const [id, setId] = useState(null);
    const { category, setContext } = useContext(Context);
    const { loading, error, data } = useQuery(GetCategories, {
        onCompleted: (data) => setId(data.Categories[0].id)
    });

    const handleClick = e => {
        setId(e.key)
    }
    
    useEffect(() => {
        if (category != id) {
            setContext(updateCategoryContext(id))
        }
    }, [category, id, setContext])

    if (loading || id == null) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

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

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick} selectedKeys={[id]}>
                {
                    data.Categories.map(({id, name, icon}) => (
                        <Menu.Item key={id} icon={<img src={icon} width="auto" height="100%" />}>
                        {name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
  }

  export default Sidebar