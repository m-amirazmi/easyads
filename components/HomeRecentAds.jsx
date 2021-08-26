import HomeRecentItem from "./HomeRecentItem";

export default function HomeRecentAds({ recentAds }) {
  const renderItem = () =>
    recentAds.map((ad) => {
      return <HomeRecentItem item={ad} />;
    });

  return (
    <div className=" bg-white w-full rounded-3xl p-6 dark:bg-gray-700 dark:text-gray-50">
      <div className="flex items-center">
        <h5>Recently Added</h5>
        <p className="text-green-700 ml-auto cursor-pointer dark:text-green-300">
          See all
        </p>
      </div>
      <div className="mt-5">{renderItem()}</div>
    </div>
  );
}
