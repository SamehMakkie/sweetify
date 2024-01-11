"use client";
import React, { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface IProps {
  type?: string;
  placeholder: string;
  leftIcon: ReactNode;
  msgDetails?: string;
  error?: FieldError;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  register: any;
}

const FormsInput: React.FC<IProps> = ({
  type = "text",
  placeholder,
  leftIcon,
  msgDetails,
  error,
  handleEnter,
  register,
}) => {
  const errorBorderStyle = error ? "border-2 border-error" : "";
  const errorTextStyle = error ? "text-red-500" : "text-card-text";
  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={
          "flex w-full px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary " +
          errorBorderStyle
        }>
        {leftIcon}
        <input
          type={type}
          onKeyDown={handleEnter}
          className="w-full text-md bg-transparent outline-none placeholder:text-card-text text-white"
          placeholder={placeholder}
          {...register}
        />
      </div>
      {(error || msgDetails) && (
        <p className={"pl-5 text-sm " + errorTextStyle}>
          {error ? error.message : msgDetails}
        </p>
      )}
    </div>
  );
};

export default FormsInput;
