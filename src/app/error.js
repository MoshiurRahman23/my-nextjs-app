"use client";

import { Button } from "antd";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="mt-10 text-center">
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl">
        Something went wrong!!!
      </p>
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl my-2">
        {error.message}
      </p>
      <Button onClick={() => reset()} ghost>
        Try Again
      </Button>
    </div>
  );
};

export default ErrorPage;
