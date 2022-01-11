// Core
import React, { FC } from "react";
import { Layout } from "antd";

// Components
import { Header as HeaderC } from "./components/Header";
import { Footer as FooterC } from "./components/Footer";
import ContentWraper from "./components/ContentWraper";

// Styles
import "./styles/global.scss";

const { Header, Footer } = Layout;

const App: FC = () => {
  return (
    <Layout className="app">
      <Header className="app-header">
        <div className="container">
          <HeaderC />
        </div>
      </Header>
      <div className="container">
        <ContentWraper />
      </div>
      <Footer className="app-footer">
        <div className="container">
          <FooterC />
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
