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
        <Image src={homePageBanner} alt="homePageBanner" height={1000} />
        <div className="absolute top-28 left-20">
          <div className="font-bold text-6xl text-white mb-10">
            We make <br />
            the future of <br></br>work,
            <span className="text-yellow-400 italic font-mono"> work</span>
          </div>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
        <div className="font-semibold text-center bg-emerald-100 pt-5 pb-40 text-5xl">
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
      <div className="offices-container w-4/5 mx-auto flex justify-between items-center">
        <div className="w-2/5">
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
        <div className="flex justify-between w-1/2 relative">
          <div>
            <Image src={homePageImageThree} width={250} />
          </div>
          <div>
            <Image src={homePageImageFour} width={250} />
          </div>
          <faEye />
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
      <div className="grid grid-cols-4 gap-4 mt-24">
        <div>
          <Image src={gridImageOne} />
        </div>
        <div className="col-span-2">
          <Image src={gridImageTwo} />
        </div>
        <div>
          <Image src={gridImageThree} />
        </div>
        <div>
          <Image src={gridImageFour} />
        </div>
        <div>
          <Image src={gridImageFive} />
        </div>
        <div>
          <Image src={gridImageSix} />
        </div>
        <div>
          <Image src={gridImageSeven} />
        </div>
      </div>
      <div className="flex gap-40 w-11/12 justify-between mx-auto mt-24 items-center">
        <div className="">
          <Image src={reviewImage} width={550} />
        </div>
        <div className="w-1/2 mt-4">
          <div className="font-semibold text-2xl leading-10">
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
        <div className="flex justify-between">
          {moreAboutFiverrContent.map((items, index) => (
            <div className="w-1/5">
              <Image src={items.src} width={300} />
              <div className="my-4">{items.language}</div>
              <div className="mb-4 font-semibold text-xl">{items.content}</div>
              <div className="text-green-600">Watch Now </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
