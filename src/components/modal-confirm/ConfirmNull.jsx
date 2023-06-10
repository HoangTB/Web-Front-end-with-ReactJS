import React from "react";
import "./ConfirmNull.css";
const ConfirmNull = (props) => {
  return (
    <div className="modal">
      <div className="modal-null">
        <p>Please fill in the content !</p>
        <div className="modal-null-button">
          <button onClick={() => props.handleCloseForm()}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNull;
