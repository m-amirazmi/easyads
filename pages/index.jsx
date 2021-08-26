import Head from "next/head";
import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";
import HomeItemContainer from "../components/HomeItemContainer";
import HomeFooter from "../components/HomeFooter";
import LayoutMain from "../components/LayoutMain";
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

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [featuredItem, setFeaturedItem] = useState([
    {
      id: "1",
      name: "Electronics",
      image: lightning,
      count: "39,385",
    },
    {
      id: "2",
      name: "Vehicles",
      image: car,
      count: "9,370",
    },
    {
      id: "3",
      name: "Property",
      image: house,
      count: "63,980",
    },
    {
      id: "4",
      name: "Jobs",
      image: briefcase,
      count: "5,970",
    },
    {
      id: "5",
      name: "Gardening",
      image: plant,
      count: "2,820",
    },
    {
      id: "6",
      name: "Animals",
      image: fox,
      count: "770",
    },
    {
      id: "7",
      name: "Hobbies",
      image: guitar,
      count: "12,574",
    },
    {
      id: "8",
      name: "Fashion",
      image: shirt,
      count: "54,924",
    },
  ]);

  return (
    <>
      <Head>
        <title>EasyAds | Welcome</title>
      </Head>
      <div className={`${isDark && "dark"} md:h-screen md:w-screen`}>
        <LayoutMain>
          <HomeHeader isDark={isDark} setIsDark={setIsDark} />
          <HomeSearch />
          <HomeItemContainer featuredItem={featuredItem} />
          <HomeFooter />
        </LayoutMain>
      </div>
    </>
  );
}
