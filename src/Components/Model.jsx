import React, { useCallback, useEffect } from "react";

export default function Model({ img, title, value, description, onClose }) {
  const handelOpenModal = useCallback(async () => {
    await document.getElementById("my_modal_5").showModal();
  }, [value]);
  useEffect(() => {
    if (value) handelOpenModal();
  }, [handelOpenModal, value]);

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-[#2A2A2A] text-[#E0E0E0]">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover mb-4"
          />
          <p>
            {description ||
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, illo!"}
          </p>
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn bg-[#4A90E2] border-none hover:bg-[#357ABD] text-[#E0E0E0]"
              onClick={onClose}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
