import React from "react";

export default function HomeFooter() {
  return (
    <div className="mt-3 mb-3">
      <p className="text-sm">Do you have something to sell?</p>
      <div className="mt-2 grid grid-cols-7 gap-4 items-center">
        <button className="col-span-3 bg-yellow-300 text-gray-900 py-3 rounded-xl hover:bg-yellow-400">
          Post an Ads
        </button>
        <p className="col-span-1 text-center">or</p>
        <p className="col-span-3 font-bold flex items-center">
          <span>Become our member</span>
          <i className="cursor-pointer ml-auto fas fa-plus p-2 rounded-full bg-green-700 bg-opacity-30  hover:bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-30 dark:hover:bg-opacity-70"></i>
        </p>
      </div>
    </div>
  );
}
