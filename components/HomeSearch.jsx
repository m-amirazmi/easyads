import React from "react";
import styles from "../styles/modules/HomeSearch.module.scss";

export default function HomeSearch() {
  return (
    <div className="mb-3">
      <div className={styles.inputContainer}>
        <input
          placeholder="Search"
          className={`${styles.input} bg-green-700 dark:bg-gray-800`}
        />
        <i className="py-2 fas fa-search text-gray-100"></i>
      </div>
    </div>
  );
}
