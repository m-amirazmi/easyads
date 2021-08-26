import Image from "next/image";
import { protonIriz } from "../assets/images";

export default function HomeRecentItem({ item }) {
  const { image, name, location, price, timestampAdded } = item;
  return (
    <div className="mb-4 h-24 grid grid-cols-9 items-center gap-2 bg-green-700 bg-opacity-10 rounded-xl cursor-pointer border border-white hover:border-green-500 hover:bg-opacity-20">
      <div className="col-span-3">
        <div className="">
          <Image
            src={image}
            className="object-cover rounded-xl"
            width={500}
            height={379}
          />
        </div>
      </div>
      <div className="h-full col-span-6 py-2 pr-3">
        <div className="h-full flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-xs font-light">
            {location.city} | {location.state}
          </p>
          <p className="flex items-center mt-auto font-semibold text-green-900">
            <span>RM {price}</span>
            <span className="text-gray-500 font-medium text-xs ml-auto">
              14 mins ago
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
