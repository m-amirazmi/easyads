import React from "react";
import styles from "../styles/modules/HomeSearch.module.scss";

export default function HomeSearch() {
  return (
    <div className="mb-3">
      <div className={styles.input}>
        <input
          placeholder="Search"
          className="rounded-xl px-3 py-2 pl-10 placeholder-gray-100 bg-green-700 bg-opacity-50 w-full focus:outline-none focus:border-green-300 dark:bg-gray-800"
        />
        <i className="py-2 fas fa-search text-gray-100"></i>
      </div>
    </div>
  );
}
