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
  const tegs = [
    {
      name: "Sketch",
      color: "#FFAB2B",
    },
    {
      name: "Spotify",
      color: "#6DD230",
    },
    {
      name: "Dribble",
      color: "#FE4D97",
    },
    {
      name: "Behance",
      color: "#4D7CFE",
    },
    {
      name: "UX",
      color: "#778CA2",
    },
  ];

  return (
    <SiderContext.Provider value={{ showSider, setSider, tegs }}>
      <div className="app">
        <Header>
          <div className="container">
            <HeaderC />
          </div>
        </Header>
        <div className="container" style={{ width: "100%" }}>
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
