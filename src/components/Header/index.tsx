import React, { useContext } from "react";
import LinkWithIcon from "../LinkWithIcon";
import { SiderContext } from "../../App";

import { PlusCircleOutlined } from "@ant-design/icons";
import "./Header.scss";

export const Header = () => {
  const { showSider, setSider } = useContext(SiderContext);

  return (
    <div className="header">
      <LinkWithIcon
        title="NEW TASK"
        icon={<PlusCircleOutlined />}
        onClick={() => setSider(!showSider)}
        className={showSider ? "active" : ""}
      />
    </div>
  );
};
