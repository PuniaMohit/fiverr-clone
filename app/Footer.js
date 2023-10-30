import { SiFiverr } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { LuPersonStanding } from "react-icons/lu";
import { BsCurrencyRupee } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const categories = [
  "Categories",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  `Music & Audio`,
  "Fiverr Logo Maker",
  "Programming & Tech",
  "Data",
  "Business",
  "Lifestyle",
  "Photography",
  "End-to-End Projects",
  "Sitemap",
];
const about = [
  "About",
  "Careers",
  `Press & News`,
  "Partnerships",
  "Privacy Policy ",
  "Terms of Service",
  "Intellectual Property Claims",
  "Investor Relations",
];
const supportAndEducation = [
  "Support and Education",
  `Help & Support`,
  "Trust & Safety",
  "Selling on Fiverr",
  "Buying on Fiverr",
  "Fiverr Guides",
  "Fiverr Workspace",
  "Invoice Software",
  "Learn",
  "Online Courses",
];
const community = [
  "Community",
  "Customer Success Stories",
  "Community Hub",
  "Forum",
  "Events",
  "Blog",
  "Influencers ",
  "Affiliates",
  "Podcast",
  "Invite a Friend",
  "Become a Seller",
  "Community Standards",
];
const businessSolutions = [
  "Business Solutions",
  "About Business Solutions",
  "Fiverr Pro",
  "Fiverr Certified",
  "Fiverr Enterprise",
  "ClearVoice",
  "Content Marketing",
  "Working Not Working",
  "Contact Sales",
];

const Footer = () => {
  return (
    <div className="mt-48">
      <div className="w-full bg-green-900 text-center py-24">
        <div className="mt-8 font-bold sm:text-5xl text-2xl text-white">
          We love working here. We think
          <span className="text-yellow-600"> you will too.</span>
        </div>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          See All Open Positions
        </button>
      </div>
      <div className="sm:block hidden sm:flex flex-wrap sm:gap-8 lg:gap-0 mt-16 border-b-2 pb-8 w-11/12 mx-auto 2xl:w-3/5">
        <div className="lg:w-1/5">
          {categories.map((item, index) => (
            <div className={`mb-4 ${index === 0 && "font-semibold"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="lg:w-1/5">
          {about.map((item, index) => (
            <div className={`mt-4 ${index === 0 && "font-semibold"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="lg:w-1/5">
          {supportAndEducation.map((item, index) => (
            <div
              className={`${
                item === "Invoice Software" || item === "Online Courses"
                  ? " text-slate-400  text-sm"
                  : "mt-4"
              } ${index === 0 && "font-semibold"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="lg:w-1/5">
          {community.map((item, index) => (
            <div className={`mt-4 ${index === 0 && "font-semibold"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="lg:w-1/5">
          {businessSolutions.map((item, index) => (
            <div
              className={`${
                item === "Content Marketing"
                  ? " text-slate-400  text-sm"
                  : "mt-4"
              } ${index === 0 && "font-semibold"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <Accordion
          sx={{
            backgroundColor: "#f3f3f3",
            boxShadow: "none",
            border: "none",
            "&.MuiAccordion-root:before": {
              content: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "700" }}>Catergories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {categories.map((item, index) => (
              <div className="mb-4 text-slate-600">{index !== 0 && item}</div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#f3f3f3",
            boxShadow: "none",
            border: "none",
            "&.MuiAccordion-root:before": {
              content: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "700" }}>About</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {about.map((item, index) => (
              <div className="mb-4 text-slate-600">{index !== 0 && item}</div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#f3f3f3",
            boxShadow: "none",
            border: "none",
            "&.MuiAccordion-root:before": {
              content: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "700" }}>
              Support and Education
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {supportAndEducation.map((item, index) => (
              <div className="mb-4 text-slate-600">{index !== 0 && item}</div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#f3f3f3",
            boxShadow: "none",
            border: "none",
            "&.MuiAccordion-root:before": {
              content: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "700" }}>Community</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {community.map((item, index) => (
              <div className="mb-4 text-slate-600">{index !== 0 && item}</div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#f3f3f3",
            boxShadow: "none",
            border: "none",
            "&.MuiAccordion-root:before": {
              content: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "700" }}>
              Business Solutions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {businessSolutions.map((item, index) => (
              <div className="mb-4 text-slate-600">{index !== 0 && item}</div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="md:flex justify-between w-11/12 mx-auto items-center md:mb-0 mb-4">
        <div className="sm:flex gap-4 items-center mx-auto sm:mx-0 w-fit">
          <SiFiverr size="100" className="mx-auto" />
          <div>© Fiverr International Ltd. 2023</div>
        </div>
        <div className="sm:flex gap-8 items-center w-fit mx-auto sm:mx-0">
          <div className="flex gap-4 items-center sm:mb-0 sm:mt-0 mt-4 mb-4">
            <FaTiktok />
            <GrInstagram />
            <BsLinkedin />
            <BsFacebook />
            <BsPinterest />
            <RiTwitterXFill />
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex items-center ">
              <BsGlobe />
              <div>English</div>
            </div>
            <div className="flex items-center ">
              <BsCurrencyRupee />
              <div>INR</div>
            </div>
            <LuPersonStanding className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
