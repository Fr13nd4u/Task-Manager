// Core
import React, { createContext, FC, useState } from "react";
import { Layout } from "antd";

// Components
import { Header as HeaderC } from "./components/Header";
import { Footer as FooterC } from "./components/Footer";
import ContentWraper from "./components/ContentWraper";

// Styles
import "./styles/global.scss";

const { Header, Footer } = Layout;
export const SiderContext = createContext<any>(null);

const App: FC = () => {
  const [showSider, setSider] = useState(false);

  return (
    <SiderContext.Provider value={{ showSider, setSider }}>
      <div className="app">
        <Header>
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
      </div>
    </SiderContext.Provider>
  );
};

export default App;
