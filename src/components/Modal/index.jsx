import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import styles from "./modal.module.scss";

function Modal({ children, isOpen, className = "", handleClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div
        onClick={handleClose}
        className={
          `${styles.modal} ${isOpen ? styles.open : styles.close}` +
          " " +
          className
        }
      >
        <div className={styles.modal__overlay} />
        <div
          className={styles.modal__content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modal__box}>{children}</div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Modal;

Modal.defaultProps = {
  children: "",
  hasClose: true,
  isOpen: false,
  hasOutsideClick: true,
};
