import { useQuery } from '@apollo/client';
import { Layout, Menu } from 'antd';
import { Context, updateCategoryContext, updateSidebarContext } from "../../../context/Context"
import GetCategories from '../../../graphql/Queries/Categories'
import React, { useContext, useEffect, useState } from "react"

const { Sider } = Layout;

const Sidebar = () => {
    const [id, setId] = useState(null);
    const { sidebar, category, setContext } = useContext(Context);
    const { loading, error, data } = useQuery(GetCategories, {
        onCompleted: (data) => setId(data.Categories[0].id)
    });

    const collapse = () => {
        setContext(updateSidebarContext(!sidebar))
    }

    const handleClick = event => {
        setId(event.key)
    }
    
    useEffect(() => {
        if (category != id) {
            setContext(updateCategoryContext(id))
        }

        if (category != id) {
            setContext(updateCategoryContext(id))
        }
    }, [category, id, setContext])

    if (loading || id == null) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Sider
            breakpoint="lg"
            onBreakpoint={() => {
                collapse()
            }}

            collapsedWidth="0"
            style={{
                height: '100vh'
            }}
            trigger={null}
            collapsible
            collapsed={sidebar}
        >
            <div className="logo"><img src="https://poe-direct.s3.amazonaws.com/icons/logo/poe.png" width="100%" height="auto"/></div>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick} selectedKeys={[id]}>
                {
                    data.Categories.map(({id, name, icon}) => (
                        <Menu.Item key={id} icon={<img src={icon} width="auto" height="100%" />} className="SiderItem">
                            {name}
                        </Menu.Item>
                    ))
                }
            </Menu>
        </Sider>
    );
  }

  export default Sidebar