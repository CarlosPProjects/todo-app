"use client";

import useSWR from "swr";

import { GetTasks } from "@/utils/todosFetch";
import { TodosProps } from "@/utils/types";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

const ReadTasks = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useSWR<TodosProps[], Error>("/api/todos", GetTasks);

  if (error) {
    console.log("Error loading todos", error);
    return <div>Error loading todos</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        {todos && todos.length > 0 ? (
          todos.map(({ _id, title }) => (
            <div
              key={_id.toString()}
              className="flex justify-between items-center"
            >
              <p className="text-lg font-medium">{title}</p>
              <div className="flex gap-2">
                <EditTask id={_id.toString()} oldTitle={title} />
                <DeleteTask id={_id.toString()} />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <p className="text-lg font-light text-neutral-400">
              What is your next challenge?
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ReadTasks;
