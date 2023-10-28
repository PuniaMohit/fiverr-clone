import Image from "next/image";
import {
  homePageBanner,
  homePageImageTwo,
  homePageImageThree,
  homePageImageFour,
  fiverrWayImageOne,
  fiverrWayImageTwo,
  fiverrWayImageThree,
  fiverrWayImageFour,
  fiverrWayImageFive,
  fiverrWayImageSix,
  gridImageOne,
  gridImageTwo,
  gridImageThree,
  gridImageFour,
  gridImageFive,
  gridImageSix,
  gridImageSeven,
  reviewImage,
  moreAboutFiverrImageOne,
  moreAboutFiverrImageTwo,
  moreAboutFiverrImageThree,
  moreAboutFiverrImageFour,
} from "./common/images";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const fiverrWayContent = [
  {
    src: fiverrWayImageOne,
    title: "Quality",
    width: 100,
    content: "We challenge ourselves and our teams to aim higher.",
  },
  {
    src: fiverrWayImageTwo,
    title: "Data rules",
    width: 80,
    content: "Data wins every argument. There’s data to support this.",
  },
  {
    src: fiverrWayImageThree,
    title: "Stay humble",
    width: 80,
    content: "We always check our ego at the door.",
  },
  {
    src: fiverrWayImageFour,
    title: "Celebrate",
    width: 70,
    content: "When we win, we take a moment to celebrate.",
  },
  {
    src: fiverrWayImageFive,
    title: "Our principles",
    width: 100,
    content: "Anyone can suggest new principles or challenge existing ones.",
  },
  {
    src: fiverrWayImageSix,
    title: "Speed matters",
    width: 100,
    content: "Moving quickly allows us to test things, learn, and iterate.",
  },
];

const moreAboutFiverrContent = [
  {
    src: moreAboutFiverrImageOne,
    language: "English",
    content: "Team Up - Our 2022 Brand Campaign ",
  },
  {
    src: moreAboutFiverrImageTwo,
    language: "Hebrew",
    content: "An Ordinary Day at Fiverr’s HQ",
  },
  {
    src: moreAboutFiverrImageThree,
    language: "English",
    content: "Turn Nothing into Something - Our 2021 Brand Campaign",
  },
  {
    src: moreAboutFiverrImageFour,
    language: "English",
    content: "How Fiverr Works",
  },
];

export default function HomePage() {
  return (
    <div>
      <div className="relative">
        <div>
          <Image src={homePageBanner} alt="homePageBanner" />
        </div>
        <div className="absolute xl:top-28 xl:left-20 lg:top-16 lg:left-12 md:top-8 md:left-4 top-0 left-4">
          <div className="font-bold xl:text-6xl lg:text-3xl text-base md:text-xl  text-white sm:mb-10 mb-0">
            We make <br />
            the future of <br></br>work,
            <span className="text-yellow-400 italic font-mono"> work</span>
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold sm:text-base text-xs sm:py-2 sm:px-4 rounded py-1 px-2">
            Find Your Next Job
          </button>
        </div>
      </div>
      <div className="my-10 text-center">
        <div className="font-bold text-4xl mb-5">why we're here</div>
        <div>
          We create opportunity for anyone in the world to build <br />
          their business, brand, or dream.
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <Image src={homePageImageTwo} />
      </div>
      <div className="relative">
        <div className="font-semibold text-center bg-emerald-100 pt-5 pb-40 sm:text-5xl text-2xl">
          We'are a big team,
          <br />
          comprised of pretty <br />
          small teams, powered <br />
          by <span>unique minds</span>
        </div>
        <div className="flex flex-wrap gap-8 mx-auto w-11/12 absolute job-main-container">
          <div className="p-5 bg-white job-container rounded-lg">
            <div className="font-semibold text-xl">Technology</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">16 openings</div>
            <div>
              Perfecting the platform and applications with cutting-edge
              technologies.
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Product</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>Make an impact on the way the world works together.</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Data</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>The launchpad for successful data careers</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Design</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Cultivate your creative career on a global stage</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Marketing</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>Living and breathing the Fiverr brand</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Business</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">0 openings</div>
            <div>
              Leading global expansion to level the professional playing field
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">
              Customer Care and Trust & Safety
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>The front line of consumer experience</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">
              Legal, HR and Operations
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>The backbone of Fiverr's culture</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Finance</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Bills, Budgets, Balances and Beyond</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Sales</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Recognize opportunities to widen Fiverr's impact</div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Cyber, IT and MIS</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Make an impact through cutting edge technology</div>
          </div>
        </div>
      </div>
      <div className="offices-container w-4/5 mx-auto md:flex justify-between">
        <div className="md:w-2/5 w-full">
          <div className="font-bold text-3xl">Our offices</div>
          <div className="my-5">
            We’re all about providing a conducive environment so that everyone
            can learn, thrive, and be the best version of themselves. All of our
            locations showcase items made by Fiverr sellers. Explore some of our
            offices here.
          </div>
          <div className="flex gap-12">
            <div className="leading-10 font-semibold">
              <div>Tel Aviv</div>
              <div>Berlin</div>
              <div>Kyiv</div>
              <div>New York</div>
            </div>
            <div className="leading-10 font-semibold">
              <div>London</div>
              <div>Orlando</div>
              <div>San Francisco</div>
              <div>Phoenix</div>
            </div>
            <div className="leading-10 font-semibold">
              <div>Sydney</div>
              <div>Seattle</div>
              <div>US, Remote</div>
              <div>Poland</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:justify-start md:gap-4 gap-0 md:w-1/2 w-full ">
          <div>
            <Image src={homePageImageThree} width={250} />
          </div>
          <div>
            <Image src={homePageImageFour} width={250} />
          </div>
        </div>
      </div>
      <div>
        <div className="my-16 font-bold text-4xl text-center">
          The Fiverr Way
        </div>
        <div className="flex flex-wrap w-4/5 mx-auto gap-4">
          {fiverrWayContent.map((items) => (
            <div className="fiverr-way-container">
              <Image src={items.src} width={items.width} />
              <div className="my-5 font-bold text-xl">{items.title}</div>
              <div>{items.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:gap-4 gap-1 mt-24 grid-cols-6 ">
        <div className="md:col-span-1 col-span-2">
          <Image src={gridImageOne} />
        </div>
        <div className="md:col-span-2 col-span-4">
          <Image src={gridImageTwo} />
        </div>
        <div className="md:col-span-1 col-span-3">
          <Image src={gridImageThree} />
        </div>
        <div className="md:col-span-1 col-span-3">
          <Image src={gridImageFour} />
        </div>
        <div className="md:col-span-1 col-span-2">
          <Image src={gridImageFive} />
        </div>
        <div className="md:col-span-1 col-span-2">
          <Image src={gridImageSix} />
        </div>
        <div className="md:col-span-1 col-span-2">
          <Image src={gridImageSeven} />
        </div>
      </div>
      <div className="md:flex flex-none gap-20 w-11/12 md:justify-between mx-auto mt-24 items-center">
        <div className="">
          <Image src={reviewImage} width={550} className="mx-auto" />
        </div>
        <div className="md:w-1/2 w-4/5 mt-4 mx-auto">
          <div className="md:font-semibold font-medium md:text-2xl text-xl md:leading-10 leading-6">
            After almost a decade with Fiverr, it's getting hard to separate my
            own story from the Fiverr story. I am known as Netta from Fiverr, I
            give my Fiverr email when I'm asked to provide an email address, my
            emergency contact is a friend I met at Fiverr, and I'm often told
            thatthe Fiverr offices look just like my own living room.
          </div>
          <div className="mt-8">
            Netta Goldberg, Internal Communications Manager
          </div>
        </div>
      </div>
      <div className="w-11/12 mt-32 mx-auto">
        <div className="mb-8 font-bold text-5xl">Learn more about Fiverr</div>
        <div className="flex md:gap-12 sm:gap-16 gap-8 flex-wrap">
          {moreAboutFiverrContent.map((items, index) => (
            <div className="md:w-1/5 sm:w-2/5 w-3/5 sm:mx-0 sm:mt-0 mt-8 mx-auto">
              <Image src={items.src} width={300} />
              <div className="sm:my-4 my-1">{items.language}</div>
              <div className="sm:mb-4 mb-1 font-semibold text-xl">
                {items.content}
              </div>
              <div className="text-green-600">Watch Now </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8 mt-12 mx-auto w-11/12 flex-wrap">
        <div className="py-4 px-8 border-2">
          <BiLogoLinkedin />
        </div>
        <div className="py-4 px-8 border-2">
          <BiLogoFacebook />
        </div>
        <div className="py-4 px-8 border-2">
          <BsTwitter />
        </div>
        <div className="py-4 px-8 border-2">
          <FaWhatsapp />
        </div>
        <div className="py-4 px-8 border-2">
          <IoIosMail />
        </div>
      </div>
    </div>
  );
}
