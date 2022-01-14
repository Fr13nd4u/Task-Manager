import React, { useContext } from "react";
import { Layout } from "antd";

import { SiderContext } from "../../App";
import AppRouter from "../AppRouter";
import Sider from "../Sider";

import "./ContentWraper.scss";

const ContentWraper = () => {
  const { showSider } = useContext(SiderContext);

  return (
    <Layout className="content">
      <AppRouter />
      {showSider && <Sider />}
    </Layout>
  );
};

export default ContentWraper;
