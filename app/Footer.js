const Footer = () => {
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
  return (
    <div className="mt-48">
      <div className="w-full bg-green-900 text-center py-24">
        <div className="mt-8 font-bold text-5xl text-white">
          We love working here. We think
          <span className="text-yellow-600"> you will too.</span>
        </div>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          See All Open Positions
        </button>
      </div>
      <div className="sm:flex flex-wrap sm:gap-8 lg:gap-0 mt-16 mb-8 border-b-2 pb-8 w-11/12 mx-auto">
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
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="flex gap-4"></div>
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
};

export default Footer;
