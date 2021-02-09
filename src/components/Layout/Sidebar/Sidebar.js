import { useQuery } from '@apollo/client';
import { Layout, Menu, Spin, Row, Col} from 'antd';
import { Context, updateCategoryContext, updateSidebarContext } from "../../../context/Context"
import GetCategories from '../../../graphql/Queries/Categories'
import React, { useContext, useEffect, useState } from "react"
import {
    Link,
    useHistory
} from "react-router-dom";
  

const { Sider } = Layout;

const generateMenuItems = (id, data, loading, error) => {
    if (loading || id == null) return  (
        <Row>
            <Spin tip="Loading..." className="SidebarLoadingIndicator"/>
        </Row>
    )
    if (error) return <p>Error :(</p>;
    if(data == null) return <></>
    
    return data.Categories.map(({id, name, icon}) => (
        <Menu.Item key={id} icon={<img src={icon} width="auto" height="100%" />} className="SiderItem">
            {name}
        </Menu.Item>
    ))
}

const Sidebar = () => {
    const [id, setId] = useState(null);
    const history = useHistory();
    const { sidebar, category, setContext } = useContext(Context);
    const { loading, error, data } = useQuery(GetCategories, {
        onCompleted: (data) => setId(data.Categories[0].id)
    });

    const collapse = (shouldCollapse) => {
        setContext(updateSidebarContext(shouldCollapse))
    }

    const handleClick = event => {
        setId(event.key)
        history.push("/services/" + event.item.props.children[1].props.children)

    }
    
    useEffect(() => {
        if (category != id) {
            setContext(updateCategoryContext(id))
        }

        if (category != id) {
            setContext(updateCategoryContext(id))
        }
    }, [category, id, setContext])

    return (
        <Sider
            breakpoint="lg"
            onBreakpoint={(broken) => {
                const { innerWidth: width, innerHeight: height } = window;

                if(innerWidth < 992 && broken == true) {
                    collapse(true)
                } else {
                    collapse(false)
                }
            }}

            collapsedWidth="0"
            style={{
                height: '100vh'
            }}
            trigger={null}
            collapsible
            collapsed={sidebar}
        >
            <div className="logo"><Link to="/"><img src="https://poe-direct.s3.amazonaws.com/icons/logo/poe.png" width="100%" height="auto" /></Link></div>

            <Menu theme="dark" mode="inline" onClick={handleClick} selectedKeys={[id]}>
                {
                    generateMenuItems(id, data, loading, error)
                }
            </Menu>
        </Sider>
    );
  }

  export default Sidebar