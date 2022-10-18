import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import { Task } from "./TaskList";

interface TaskProps {
  task: Task;
  setTaskList: (newTasklist: Array<Task>) => void;
  taskList: Array<Task>;
  taskdonelist: Array<Task>;
}

export function TaskCard({
  task,
  setTaskList,
  taskList,
  taskdonelist,
}: TaskProps) {
  const [checked, setCheked] = useState(false);

  function handleDone() {
    taskdonelist;
  }

  function deleteTask(taskDeleted: string) {
    const tasklistWithoutDeletedOne = taskList.filter((task) => {
      return task.id !== taskDeleted;
    });

    setTaskList(tasklistWithoutDeletedOne);
  }

  return (
    <div className="flex flex-row justify-between gap-3 px-4 py-4 bg-gray-500 border border-gray-400 rounded-lg text-gray-100">
      <div className="flex items-center gap-3">
        {checked ? (
          <div className="flex flex-row items-center gap-3">
            <Checkbox.Root
              onClick={() => {
                setCheked(false);
              }}
              checked={checked}
              className="flex items-center justify-center w-5 h-5 p-1 bg-purple  border-2 border-purple rounded-full "
            >
              <Checkbox.Indicator className="">
                <Check className="w-4 h-4 text-gray-100" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <div className="text-gray-300 line-through">{task.content}</div>
          </div>
        ) : (
          <div className="flex flex-row items-center gap-3">
            <Checkbox.Root
              onClick={() => {
                setCheked(true);
              }}
              checked={checked}
              className="flex items-center justify-center w-5 h-5 p-1 bg-transparent border-2 border-blue rounded-full "
            >
              <Checkbox.Indicator className="">
                <Check className="w-4 h-4 text-gray-100" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <div>{task.content}</div>
          </div>
        )}
      </div>
      <button onClick={() => deleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
