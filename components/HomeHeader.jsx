import React from "react";

export default function HomeHeader({ isDark, setIsDark }) {
  return (
    <>
      <div className="flex items-center mb-3">
        <h1 className="text-4xl">Welcome</h1>
        <div className="ml-auto flex items-center">
          <button className="">Login</button>
          <i className="fas fa-user-circle fa-lg ml-3"></i>
          <i
            className={`fas ${
              !isDark ? "fa-moon text-black" : "fa-sun text-white"
            } fa-lg ml-3  opacity-50 hover:opacity-100 cursor-pointer`}
            onClick={() => setIsDark(!isDark)}
          ></i>
        </div>
      </div>
      <div className="mb-3">
        <p>The modern and largest marketplace in Malaysia</p>
      </div>
    </>
  );
}
