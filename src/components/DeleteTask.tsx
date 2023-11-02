"use client";

import { LuTrash } from "react-icons/lu";
import { useState } from "react";
import { mutate } from "swr";

import { RemoveTodoDB } from "@/utils/todosFetch";
import Modal from "./Modal";

interface DeleteTaskProps {
  id: string;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDelete = async (id: string) => {
    await RemoveTodoDB(id);
    mutate("/api/todos");
    setModalOpen(false);
  };

  return (
    <>
      <LuTrash
        size={20}
        className="text-neutral-400 cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="modal-box">
          <h3 className="font-medium text-lg">
            Are you sure you want to delete this task
          </h3>
          
          <div className="modal-action">
            <form
              method="dialog"
              className="flex gap-4"
            >
              <button className="btn" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
              <button className="btn btn-warning" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteTask;
