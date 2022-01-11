import React from "react";
import { Layout } from "antd";

import AppRouter from "../AppRouter";

import "./ContentWraper.scss";

const { Content } = Layout;

const ContentWraper = () => {
  return (
    <Layout className="content">
      <Content>
        <AppRouter />
      </Content>
      <Content className="sider">Sider</Content>
    </Layout>
  );
};

export default ContentWraper;
