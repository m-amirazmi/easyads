import React from "react";
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

export default function HomeItemContainer({ featuredItem }) {
  const renderItem = () =>
    featuredItem.map((item) => {
      return <HomeItem item={item} key={item.id} />;
    });

  return (
    <div className="mb-3">
      <div className="mt-3 grid grid-cols-4 gap-4">{renderItem()}</div>
    </div>
  );
}
