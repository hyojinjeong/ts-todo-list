import React from "react";
import { ITask } from "../interfaces/interfaces";
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: number): void;
  key: number;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.num);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
