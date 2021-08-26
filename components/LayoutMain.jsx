import styles from "../styles/modules/LayoutMain.module.scss";
import HomeRecentAds from "./HomeRecentAds";

export default function LayoutMain({ children, recentAds }) {
  return (
    <div className={`${styles.container} dark:bg-gray-900`}>
      <div className={styles.widthContainer}>
        <div className={styles.mainContent}>{children}</div>
        <div className={styles.rightSide}>
          <HomeRecentAds recentAds={recentAds} />
        </div>
      </div>
    </div>
  );
}
