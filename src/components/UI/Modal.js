import React from "react";

import Button from "./Button";
import Card from "./Card";

import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal" onClick={() => props.onModalClick(false)}>
      <Card className="modal-content">
        <div className="modal-heading">
          <div className="modal-heading__text">Input Invalid</div>
        </div>
        <div className="modal-error">
          <div className="modal-error__text">{props.children}</div>
          {/* <div className="modal-error__text">Please enter age above 10</div> */}
          <div className="modal-error__button">
            <Button onClick={() => props.onModalClick(false)}>Close</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
