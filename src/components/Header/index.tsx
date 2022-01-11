import React from "react";
import LinkWithIcon from "../LinkWithIcon";
import { PlusCircleOutlined } from "@ant-design/icons";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <LinkWithIcon title="NEW TASK" icon={<PlusCircleOutlined />} />
    </div>
  );
};
