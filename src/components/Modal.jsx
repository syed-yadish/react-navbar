import React from "react";
import "../styles/Modal.css";

export const Modal = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Tjena!</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>I am a Modal</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque
            molestias ipsa quae facilis.
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
