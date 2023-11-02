interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
      {children}
    </dialog>
  );
};

export default Modal;
