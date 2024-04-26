import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalContainer, ModalBox } from "./Modal.styled";
import CamperDetailsCard from "components/CamperDetailsCard/CamperDetailsCard";

const modal = document.querySelector("#modal-root");

export const Modal = ({ campers, onClose }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <ModalBox>
          <CamperDetailsCard data={campers} onClose={onClose} />
        </ModalBox>
      </ModalContainer>
    </Overlay>,
    modal
  );
};
