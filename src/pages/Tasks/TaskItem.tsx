import React, { FC } from "react";
import { Checkbox, DatePicker } from "antd";
import moment from "moment";
import { Teg } from "../../components/Teg";

const TaskItem: FC<Props> = ({ title, date, teg }: Props) => {
  const dateValue = moment(date).format("DD MMM Y");

  return (
    <div className="tasks-item">
      <Checkbox.Group name={title}>
        <Checkbox>{title}</Checkbox>
      </Checkbox.Group>
      <div className="tasks-item_info">
        <DatePicker placeholder={dateValue} disabled />
        <Teg teg={teg} disabled />
      </div>
    </div>
  );
};

export default TaskItem;

interface Props {
  title: string;
  date: string;
  teg: {
    name: string;
    color: string;
  };
}
