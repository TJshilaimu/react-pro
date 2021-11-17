import React from "react";
import { Layout } from "antd";
import "./index.css";
const { Header, Footer, Sider, Content } = Layout;
export default function index() {
  return (
    <Layout className="wrapper">
      <Sider className="sider">侧边</Sider>
      <Layout>
        <Header className="header">头部</Header>
        <Content className="container">内容区</Content>
      </Layout>
    </Layout>
  );
}
