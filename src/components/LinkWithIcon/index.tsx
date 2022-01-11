import React from "react";
import "./LinkWithIcon.scss";

const LinkWithIcon = ({ title, icon }: Props) => {
  return (
    <span className="link-with-icon">
      {icon}
      <span>{title}</span>
    </span>
  );
};

export default LinkWithIcon;

interface Props {
  title: string;
  icon: React.ReactElement;
}
