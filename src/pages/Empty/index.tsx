import React, { FC } from "react";
import EmptyImg from "../../assets/empty.png";
import { Card } from "antd";
import "./Empty.scss";

const { Meta } = Card;

const Empty: FC = () => {
  return (
    <Card cover={<img alt="example" src={EmptyImg} />}>
      <Meta
        title="No tasks found?"
        description="Try to assign more tasks to your employees or create a new project from scratch"
      />
    </Card>
  );
};

export default Empty;
