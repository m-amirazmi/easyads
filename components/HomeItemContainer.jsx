import HomeItem from "./HomeItem";
import {
  briefcase,
  car,
  fox,
  guitar,
  house,
  lightning,
  plant,
  shirt,
} from "../assets/images";
import styles from "../styles/modules/HomeItemContainer.module.scss";

export default function HomeItemContainer({ featuredItem }) {
  const renderItem = () =>
    featuredItem.map((item) => {
      return <HomeItem item={item} key={item.id} />;
    });

  return (
    <div className="mb-3">
      <div className={styles.container}>{renderItem()}</div>
      <div className="col-span-1">
        <div
          className={`${styles.card} dark:bg-gray-700 dark:bg-opacity-30 dark:hover:bg-opacity-70`}
        >
          <span>Browse More </span>
          <i className="ml-3 fas fa-long-arrow-alt-right fa-lg"></i>
        </div>
      </div>
    </div>
  );
}
