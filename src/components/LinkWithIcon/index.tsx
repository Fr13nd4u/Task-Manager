import React from "react";
import "./LinkWithIcon.scss";

const LinkWithIcon = ({ title, icon, onClick, className }: Props) => {
  return (
    <span onClick={onClick} className={className + " link-with-icon"}>
      {icon}
      <span>{title}</span>
    </span>
  );
};

export default LinkWithIcon;

interface Props {
  title: string;
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
