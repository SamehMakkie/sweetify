import React from "react";

interface IProps {
  state: "success" | "error";
  msg: string;
}

const Toast: React.FC<IProps> = ({ state,  msg }) => {
  const toastColor = state == "success" ? "alert-success" : "alert-error";
  return (
    <>
      {msg && (
        <div className="toast toast-top toast-end">
          <div className={"alert text-white " + toastColor }>
            <span>{msg}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
