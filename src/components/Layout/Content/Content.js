import { Layout } from 'antd';
import React from "react"
import Table from "./Table/Table"
import Search from "./Search/Search"
import Welcome from "./Welcome/Welcome"
import {
  Switch,
  Route,
} from "react-router-dom";

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
                  <Switch>
                    <Route path="/services">
                      <Search />
                      <Table />
                    </Route>
                    <Route path="/">
                      <Welcome />
                    </Route>
                 </Switch>
        </Content>
    );
  }

  export default content