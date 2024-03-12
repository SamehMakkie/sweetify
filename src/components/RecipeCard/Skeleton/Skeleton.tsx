import React from "react";

const Skeleton = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-dark-secondary drop-shadow-2xl transform transition-transform duration-200 hover:scale-110 active:scale-90">
      <div className="flex flex-col gap-6 w-full p-5">
        <div className="skeleton bg-secondary h-64 w-full"></div>
        <div className="w-full flex flex-col gap-3">
          <div className="skeleton bg-secondary h-8 w-full"></div>
          <div className="skeleton bg-secondary h-8 max-w-40"></div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="skeleton bg-secondary h-4 w-full"></div>
          <div className="skeleton bg-secondary h-4 w-full"></div>
          <div className="skeleton bg-secondary h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
