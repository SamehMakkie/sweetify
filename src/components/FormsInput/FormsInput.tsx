"use client";
import React, { ReactNode } from "react";

interface IProps {
  type?: string;
  placeholder: string;
  leftIcon: ReactNode;
  msgDetails?: string;
  error?: boolean;
}

const FormsInput: React.FC<IProps> = ({
  type = "text",
  placeholder,
  leftIcon,
  msgDetails,
  error = false,
}) => {
  const errorView = error ? "border-2 border-error" : "";
  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={
          "flex w-full px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary " +
          errorView
        }>
        {leftIcon}
        <input
          type={type}
          className="w-full text-md bg-transparent outline-none placeholder:text-card-text text-white"
          placeholder={placeholder}
        />
      </div>
      {msgDetails && (
        <p className="pl-5 text-sm text-card-text">{msgDetails}</p>
      )}
    </div>
  );
};

export default FormsInput;
