import React, { useContext } from "react"
import { Context, updateSidebarContext } from "../../../../context/Context"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const Collapse = () => {
    const { sidebar, setContext } = useContext(Context)

    const toggle = () => {
        setContext(updateSidebarContext(!sidebar))
    }

    return (
        React.createElement(sidebar ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
        })
    );
  }

  export default Collapse