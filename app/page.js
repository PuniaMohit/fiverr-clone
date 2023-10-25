import Image from "next/image";
import homePageBanner from "./assets/images/homepage-banner.webp";
import homePageImageTwo from "./assets/images/homepageimagetwo.webp";
import homePageImageThree from "./assets/images/homepagethree.webp";
import homePageImageFour from "./assets/images/homepagefour.webp";
import fiverrWayImageOne from "./assets/images/fiverrwayimageone.webp";
import fiverrWayImageTwo from "./assets/images/fiverrwayimagetwo.webp";
import fiverrWayImageThree from "./assets/images/fiverrwayimagethree.webp";
import fiverrWayImageFour from "./assets/images/fiverrwayimagefour.webp";
import fiverrWayImageFive from "./assets/images/fiverrwayimagefive.webp";
import fiverrWayImageSix from "./assets/images/fiverrwayimagesix.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image src={homePageBanner} />
        <div className="absolute top-20 left-5">
          <div className="font-bold text-4xl text-white mb-5">
            We make the <br></br>future of <br></br>work,{" "}
            <span className="text-yellow-700">work</span>
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
        <div className="flex flex-wrap gap-8 mx-auto w-11/12 job-main-container">
          <div className="p-5 job-container rounded">
            <div className="font-semibold text-xl">Technology</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">16 openings</div>
            <div>
              Perfecting the platform and applications with cutting-edge
              technologies.
            </div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Product</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>Make an impact on the way the world works together.</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Data</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>The launchpad for successful data careers</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Design</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Cultivate your creative career on a global stage</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Marketing</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>Living and breathing the Fiverr brand</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Business</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">0 openings</div>
            <div>
              Leading global expansion to level the professional playing field
            </div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">
              Customer Care and Trust & Safety
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">2 openings</div>
            <div>The front line of consumer experience</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">
              Legal, HR and Operations
            </div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>The backbone of Fiverr's culture</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Finance</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Bills, Budgets, Balances and Beyond</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Sales</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Recognize opportunities to widen Fiverr's impact</div>
          </div>
          <div className="p-5 bg-white job-container">
            <div className="font-semibold text-xl">Cyber, IT and MIS</div>
            <div className="text-sm text-slate-400 mb-4 mt-3">1 openings</div>
            <div>Make an impact through cutting edge technology</div>
          </div>
        </div>
      </div>
      <div className="offices-container">
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
        <div className="my-16 font-bold text-4xl text-center">The Fiverr Way</div>
        <div className="flex flex-wrap w-4/5 mx-auto gap-4">
          <div className="fiverr-way-container">
            <Image src={fiverrWayImageOne} width={100}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div>
          <div className="fiverr-way-container">
            <Image  src={fiverrWayImageTwo} width={80}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div><div className="fiverr-way-container">
            <Image  src={fiverrWayImageThree} width={80}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div><div className="fiverr-way-container">
            <Image  src={fiverrWayImageFour} width={70}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div><div className="fiverr-way-container">
            <Image  src={fiverrWayImageFive} width={100}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div><div className="fiverr-way-container">
            <Image  src={fiverrWayImageSix} width={100}/>
            <div className="my-5 font-bold text-xl">Quality</div>
            <div>We challange ourselves and teams to aim higher</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
           <div><Image/></div>
           <div><Image/></div>
           <div><Image/></div>
           <div><Image/></div>
           <div><Image/></div>
           <div><Image/></div>
      </div>
    </div>
  );
}
