import Image from "next/image";
import headerItems from "./json-data/headerItems.json";
import Link from "next/link";
import fiverr from "./assets/images/pngegg.png";

const Header = () => {
  console.log(headerItems);
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="flex justify-between sticky top-0 items-center mx-auto w-4/5 py-4">
        <div>
          <Image src={fiverr} width={100} height={50} />
        </div>
        <div className="flex justify-around items-center gap-8">
          {headerItems.map((items, index) => (
            <div key={index} className="lg:px-1 font-bold cursor-pointer">
              <Link href={items.label ? items.link : ""}>{items.label}</Link>
            </div>
          ))}
          <Link href="/positions" className="">
            <button class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              See All Positions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;