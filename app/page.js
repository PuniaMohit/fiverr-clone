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
import CustomNextIcon from "./assets/images/svg/customNext";

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
        <div className="navbar-image-container"></div>
        <div className="absolute xl:top-32 xl:left-4 lg:top-24 md:top-8 md:left-4  top-36 sm:text-left w-full navbar-image-container-content 2xl:w-3/5">
          <div className="font-bold text-white md:mb-5 mb-0 md:w-1/5 text-4xl md:text-left text-center mx-auto md:mx-0 w-fit ">
            We make the future of work,
            <span className="text-yellow-400 italic font-mono"> work</span>
          </div>
          <div className="mx-auto md:mx-0 w-fit md:w-full">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold sm:text-base text-lg lg:text-xl text-xs sm:py-2 sm:px-4 rounded py-1 px-2 ">
              Find Your Next Job
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 md:text-center text-left w-11/12 2xl:w-1/5 mx-auto">
        <div className="font-bold sm:text-4xl text-2xl mb-5">
          Why we're here
        </div>
        <div>
          We create opportunity for anyone in the world to build their business,
          brand, or dream.
        </div>
      </div>
      <div className="w-11/12 mx-auto homepage-section-one-image"></div>
      <div className="relative bg-emerald-100 mt-8 2xl:w-ful mx-auto">
        <div className="font-semibold md:text-center text-left pt-5 pb-40 md:text-3xl text-2xl xl:w-1/5  md:w-3/5 w-4/5 mx-auto ">
          We'are a big team, comprised of pretty small teams, powered by
          <span>unique minds</span>
        </div>
        <div className="flex flex-wrap gap-8 mx-auto w-11/12  absolute job-main-container">
          <div className="p-5 bg-white job-container rounded-lg">
            <div className="font-semibold text-xl">Technology</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">16 openings</div>
            <div className="sm:block hidden">
              Perfecting the platform and applications with cutting-edge
              technologies.
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Product</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div className="sm:block hidden">
              Make an impact on the way the world works together.
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Data</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div className="sm:block hidden">
              The launchpad for successful data careers
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Design</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div className="sm:block hidden">
              Cultivate your creative career on a global stage
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Marketing</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div className="sm:block hidden">
              Living and breathing the Fiverr brand
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Business</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">0 openings</div>
            <div className="sm:block hidden">
              Leading global expansion to level the professional playing field
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">
              Customer Care and Trust & Safety
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div className="sm:block hidden">
              The front line of consumer experience
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">
              Legal, HR and Operations
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div className="sm:block hidden">
              The backbone of Fiverr's culture
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Finance</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div className="sm:block hidden">
              Bills, Budgets, Balances and Beyond
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Sales</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div className="sm:block hidden">
              Recognize opportunities to widen Fiverr's impact
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg job-container">
            <div className="font-semibold text-xl">Cyber, IT and MIS</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div className="sm:block hidden">
              Make an impact through cutting edge technology
            </div>
          </div>
        </div>
      </div>
      <div className="offices-container w-4/5 mx-auto md:flex justify-between 2xl:w-3/5 ">
        <div className="md:w-2/5 w-full">
          <div className="font-bold text-3xl">
            Our <span className="italic font-semibold">offices</span>
          </div>
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
        <div className="flex sm:justify-between justify-center md:gap-4 gap-0 md:w-1/2 w-full mt-8 sm:mt-0">
          <div>
            <Image src={homePageImageThree}  />
          </div>
          <div className="sm:block hidden">
            <Image src={homePageImageFour}  />
          </div>
        </div>
      </div>
      <div className="2xl:w-3/5 mx-auto">
        <div className="my-16 font-bold text-4xl text-center">
          The <span className="italic font-semibold">Fiverr</span> Way
        </div>
        <div className="flex flex-wrap w-4/5 mx-auto gap-4">
          {fiverrWayContent.map((items) => (
            <div className="fiverr-way-container">
              <Image
                src={items.src}
                width={items.width}
                className="sm:mx-0 mx-auto"
              />
              <div className="my-5 font-bold text-xl sm:text-left text-center">
                {items.title}
              </div>
              <div className="sm:text-left text-center">{items.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:gap-4 grid-cols-2 gap-1 mt-24 sm:grid-cols-6 ">
        <div className="md:col-span-1 sm:col-span-2 col-span-1">
          <Image src={gridImageOne} />
        </div>
        <div className="md:col-span-1 sm:col-span-3 col-span-1 sm:hidden block">
          <Image src={gridImageThree} />
        </div>
        <div className="md:col-span-2 sm:col-span-4 col-span-2">
          <Image src={gridImageTwo} />
        </div>
        <div className="md:col-span-1 sm:col-span-3 col-span-1 sm:block hidden">
          <Image src={gridImageThree} />
        </div>
        <div className="md:col-span-1 sm:col-span-3 col-span-1">
          <Image src={gridImageFour} />
        </div>
        <div className="md:col-span-1 sm:col-span-2 col-span-1">
          <Image src={gridImageFive} />
        </div>
        <div className="md:col-span-1 sm:col-span-2 col-span-1">
          <Image src={gridImageSix} />
        </div>
        <div className="md:col-span-1 sm:col-span-2 col-span-1">
          <Image src={gridImageSeven} />
        </div>
      </div>
      <div className="md:flex flex-none gap-20 w-11/12 md:justify-between mx-auto mt-24 items-center 2xl:w-3/5">
        <div className="">
          <Image src={reviewImage} width={550} className="mx-auto" />
        </div>
        <div className="md:w-1/2 w-4/5 mt-4 mx-auto ">
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
      <div className="w-11/12 mt-32 mx-auto 2xl:w-3/5">
        <div className="mb-8 font-bold sm:text-5xl text-2xl">
          Learn more about Fiverr
        </div>
        <div className="flex md:gap-12 sm:gap-16 gap-8 flex-wrap">
          {moreAboutFiverrContent.map((items, index) => (
            <div
              className={`md:w-1/5 sm:w-2/5 w-full sm:mx-0 sm:mt-0 mt-8 mx-auto ${
                index !== 0 && "sm:block hidden"
              }`}
            >
              <Image src={items.src} className="bg-cover" />
              <div className="sm:my-4 my-1">{items.language}</div>
              <div className="sm:mb-4 mb-1 font-semibold text-xl">
                {items.content}
              </div>
              <div className="flex gap-1 items-center text-green-600">
                <div>Watch Now</div>
                <div style={{ color: "#1DBF73" }}>
                  <CustomNextIcon />
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8 mt-12 mx-auto w-11/12 flex-wrap 2xl:w-3/5">
        <div className="py-4 sm:px-8 px-4 border-2">
          <BiLogoLinkedin />
        </div>
        <div className="py-4 sm:px-8 px-4 border-2">
          <BiLogoFacebook />
        </div>
        <div className="py-4 sm:px-8 px-4 border-2">
          <BsTwitter />
        </div>
        <div className="py-4 sm:px-8 px-4 border-2">
          <FaWhatsapp />
        </div>
        <div className="py-4 sm:px-8 px-4 border-2">
          <IoIosMail />
        </div>
      </div>
    </div>
  );
  //1DBF73
}
