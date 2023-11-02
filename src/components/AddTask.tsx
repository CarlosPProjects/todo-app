"use client";
import { mutate } from "swr";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { AddTask } from "@/utils/todosFetch";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const completed = false;

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a task");
      return;
    }
    await AddTask(title, completed);
    mutate("/api/todos");
    setTitle("");
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="flex w-full gap-3">
        <input
          type="text"
          placeholder="Add new task"
          className="flex-1 bg-neutral-900/40 px-4 placeholder:text-slate-100/20 font-light text-slate-400 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="bg-primary p-3">
          <LuPlus size={24} />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
