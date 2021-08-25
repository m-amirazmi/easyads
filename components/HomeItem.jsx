import Image from "next/image";

export default function HomeItem({ item }) {
  const { image, name, count } = item;
  return (
    <div className="col-span-1">
      <div className="rounded-xl bg-green-700 bg-opacity-30 p-4 text-center shadow-lg cursor-pointer  hover:bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-30 dark:hover:bg-opacity-70">
        <Image src={image} height={80} width={80} />
        <p>{name}</p>
        <p className="text-gray-300 text-sm">{count}</p>
      </div>
    </div>
  );
}
