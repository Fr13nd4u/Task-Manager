import React, { FC } from "react";
import { useTasks } from "../../hooks/useTasks";
import TaskItem from "./TaskItem";

import "./Tasks.scss";

const Tasks: FC = () => {
  const { tasks } = useTasks();

  console.log();

  return (
    <div className="tasks">
      {tasks.map((task: any) => (
        <div key={task.id}>
          <TaskItem title={task.title} date={task.date} teg={task.teg} />
          <hr className="tasks-hr" />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
