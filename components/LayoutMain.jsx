import React from "react";

export default function LayoutMain({ children }) {
  return (
    <div className="text-white h-full w-full bg-green-500 dark:bg-gray-900">
      <div className="flex flex-col justify-center h-full w-2/5 p-3 m-auto">
        {children}
      </div>
    </div>
  );
}
