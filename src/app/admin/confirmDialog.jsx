import React from "react";

function ConfirmDialog({
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  confirmFunc,
  cancelFunc,
}) {
  return (
    <div className="admin_popup">
      <div className="popup_window confirm_window col">
        <h3>{title}</h3>
        <p>{message}</p>
        <div
          className="rowc"
          style={{ justifyContent: "flex-end", gap: 10, marginTop: "20px" }}
        >
          <div className="cta_btn2" onClick={cancelFunc}>
            {cancelText}
          </div>
          <div className="cta_btn" onClick={confirmFunc}>
            {confirmText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
