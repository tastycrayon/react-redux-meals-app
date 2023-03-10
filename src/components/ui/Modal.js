import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const Backdrop = ({ onCartClose }) => {
  return <div onClick={onCartClose} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalToAddModal = document.getElementById("overlays");
export default function Modal({ onCartClose, children }) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onCartClose={onCartClose} />,
        portalToAddModal
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalToAddModal
      )}
    </React.Fragment>
  );
}
