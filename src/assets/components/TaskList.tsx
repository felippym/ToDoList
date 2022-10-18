import { useState } from "react";
import clipboard from "../Clipboard.png";
import { NewTaskBar } from "./NewTaskBar";
import { TaskCard } from "./Task";

export interface Task {
  id: string;
  content: string;
  done: boolean;
}

export function TaskList() {
  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const [taskdonelist, setTaskdonelist] = useState<Array<Task>>([]);

  return (
    <div className="max-w-3xl w-full flex flex-col ">
      <NewTaskBar funcaominhalista={setTaskList} minhalista={taskList} />

      <div className="w-full mt-16 mb-6 flex flex-row justify-between">
        <p className="text-blue font-bold text-sm">
          Tarefas criadas{" "}
          <span className="bg-gray-400 px-2 py text-gray-200 rounded-full">
            {taskList.length}
          </span>
        </p>
        <p className="text-purple font-bold">
          Concluídas{" "}
          <span className="bg-gray-400 px-2 py text-gray-200 rounded-full">
            {taskdonelist.length} de {taskList.length}
          </span>
        </p>
      </div>

      {taskList.length == 0 ? (
        <div className="flex flex-col items-center gap-4 mt-10">
          <img src={clipboard} alt="" />
          <div>
            <p className="text-gray-300 font-bold">
              Você ainda não tem tarefas cadastradas
            </p>
            <p className="text-gray-300">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-3">
          {taskList.map((task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                setTaskList={setTaskList}
                taskList={taskList}
                taskdonelist={taskdonelist}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
