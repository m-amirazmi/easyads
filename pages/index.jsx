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
  customPcBuild2021,
  fox,
  galaxyFold3,
  guitar,
  house,
  lightning,
  peroduaAtiva,
  plant,
  protonIriz,
  protonSaga,
  protonX70,
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
  const [recentAds, setRecentAds] = useState([
    {
      id: "1",
      name: "Custom PC Buld 2021",
      location: {
        city: "Ampang",
        state: "Selangor",
      },
      price: "2,340.90",
      image: customPcBuild2021,
    },
    {
      id: "2",
      name: "Galaxy Fold 3",
      location: {
        city: "Gombak",
        state: "Selangor",
      },
      price: "8,899.90",
      image: galaxyFold3,
    },
    {
      id: "3",
      name: "Proton Iriz",
      location: {
        city: "Jalan Kuching",
        state: "Kuala Lumpur",
      },
      price: "45,090",
      image: protonIriz,
    },
    {
      id: "4",
      name: "Proton X70",
      location: {
        city: "Jalan Kuching",
        state: "Kuala Lumpur",
      },
      price: "120,380",
      image: protonX70,
    },
    {
      id: "5",
      name: "Perodua Ativa",
      location: {
        city: "Petaling Jaya",
        state: "Selangor",
      },
      price: "52,000",
      image: peroduaAtiva,
    },
    {
      id: "6",
      name: "Proton Saga",
      location: {
        city: "Kajang",
        state: "Selangor",
      },
      price: "25,860",
      image: protonSaga,
    },
  ]);

  return (
    <>
      <Head>
        <title>EasyAds | Welcome</title>
      </Head>
      <div className={`${isDark && "dark"} md:h-screen md:w-screen`}>
        <LayoutMain recentAds={recentAds}>
          <HomeHeader isDark={isDark} setIsDark={setIsDark} />
          <HomeSearch />
          <HomeItemContainer featuredItem={featuredItem} />
          <HomeFooter />
        </LayoutMain>
      </div>
    </>
  );
}
