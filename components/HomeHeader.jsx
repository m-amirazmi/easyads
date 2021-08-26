import styles from "../styles/modules/HomeHeader.module.scss";

export default function HomeHeader({ isDark, setIsDark }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>Welcome</h1>
        <div className={styles.buttonContainer}>
          <button className="">Login</button>
          <i className="fas fa-user-circle fa-lg ml-3"></i>
          <i
            className={`${!isDark ? "fa-moon" : "fa-sun"} fas fa-lg ml-3 `}
            onClick={() => setIsDark(!isDark)}
          ></i>
        </div>
      </div>
      <div className="mb-3">
        <p>The modern and largest marketplace in Malaysia</p>
      </div>
    </div>
  );
}
