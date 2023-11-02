import { TodosProps } from "./types";

export const GetTasks = async (url: string): Promise<TodosProps[]> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.todos;
  } catch (error) {
    console.log("Error fetching todos:", error);
  }
  return [];
};

export const AddTask = async (title: string, completed: boolean) => {
  try {
    await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed }),
    });
  } catch (error) {
    console.log("Error adding task:", error);
  }
};

export const RemoveTodoDB = async (id: string) => {
  try {
    await fetch(`/api/todos`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

export const UpdateTodoDB = async (id: string, title: string) => {
  try {
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};
