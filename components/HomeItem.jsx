import Image from "next/image";
import styles from "../styles/modules/HomeItem.module.scss";

export default function HomeItem({ item }) {
  const { image, name, count } = item;
  return (
    <div className={styles.container}>
      <div
        className={`${styles.card} dark:bg-gray-700 dark:bg-opacity-30 dark:hover:bg-opacity-70`}
      >
        <Image src={image} height={80} width={80} />
        <p>{name}</p>
        <p className="text-gray-300 text-sm">{count}</p>
      </div>
    </div>
  );
}
