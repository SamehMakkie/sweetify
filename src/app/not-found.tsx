import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <main className="flex flex-col w-full h-96 max-w-xl  gap-5 justify-center items-center rounded-3xl bg-dark-secondary drop-shadow-2xl">
        <h1 className="text-4xl text-card-text text-center">404</h1>
        <h2 className="text-5xl text-primary text-center">
          Oops! Page not found
        </h2>
        <p className="text-body-text text-center">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-body-text text-center">
          It might have been moved or deleted
        </p>
        <Link href="/">
          <button className="w-fit btn btn-primary text-gray-200">
            Go back to home
          </button>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
