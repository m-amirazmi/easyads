import styles from "../styles/modules/LayoutMain.module.scss";

export default function LayoutMain({ children }) {
  return (
    <div className={`${styles.container} dark:bg-gray-900`}>
      <div className={styles.widthContainer}>{children}</div>
    </div>
  );
}
