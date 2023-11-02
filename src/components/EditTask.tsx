"use client";

import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { mutate } from "swr";

import Modal from "./Modal";
import { UpdateTodoDB } from "@/utils/todosFetch";

interface EditTaskProps {
  id: string;
  oldTitle: string;
}

const EditTask: React.FC<EditTaskProps> = ({ id, oldTitle }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleEdit = async (id: string, title: string) => {
    if (!title) {
      alert("Please enter a task");
      return;
    }
    setModalOpen(false);
    await UpdateTodoDB(id, title);
    mutate("/api/todos");
  };

  return (
    <>
      <LuPencil
        size={20}
        className="text-neutral-400 cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-medium text-lg">Edit your task</h3>
            <button
              className="btn btn-sm btn-circle"
              onClick={() => setModalOpen(false)}
            >
              x
            </button>
          </div>

          <div className="modal-action">
            <form
              onSubmit={() => handleEdit(id, title)}
              method="dialog"
              className="flex flex-col gap-6 w-full"
            >
              <input
                type="text"
                placeholder={oldTitle}
                className="input input-bordered w-full"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="flex gap-4 justify-end">
                <button type="submit" className="btn btn-warning">
                  Complete
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditTask;
