import React from "react";
import { Layout } from "antd";
import "./index.css";
const { Header, Footer, Sider, Content } = Layout;
export default function index() {
  return (
    <Layout className="wrapper">
      <Sider className="sider">Sider</Sider>
      <Layout>
        <Header className="header">Header</Header>
        <Content className="container">Content</Content>
      </Layout>
    </Layout>
  );
}
