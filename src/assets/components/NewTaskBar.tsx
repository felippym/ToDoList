import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import { Task } from "./TaskList";

export interface NewTaskBarProps {
  minhalista: Array<Task>;
  funcaominhalista: (newState: Array<Task>) => void;
}

export function NewTaskBar({ funcaominhalista, minhalista }: NewTaskBarProps) {
  const [newcomment, setNewComment] = useState("");

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    funcaominhalista([
      { id: v4(), content: newcomment, done: false },
      ...minhalista,
    ]);

    setNewComment("");
  }

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewComment(event.target.value);
  }

  return (
    <div className="w-full -mt-8">
      <div>
        <form onSubmit={handleNewTask} className="flex gap-2 ">
          <input
            value={newcomment}
            onChange={handleTextChange}
            type="text"
            className="w-full bg-gray-500 rounded-lg text-gray-200 border border-gray-700 placeholder-gray-300 p-4 focus:border-none"
            placeholder="Adicione uma tarefa"
            required
          />
          <button
            type="submit"
            className="p-4 flex flex-row items-center gap-2 text-gray-100 bg-blue-dark rounded-lg font-bold"
          >
            Criar <PlusCircle size={20} weight="bold" color="#F2F2F2" />
          </button>
        </form>
      </div>
    </div>
  );
}
