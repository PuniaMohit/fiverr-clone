"use client";

import { useState } from "react";
import Image from "next/image";
import headerItems from "./json-data/headerItems.json";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { fiverr } from "./common/images";
import HamburgerIcon from "./assets/images/svg/hamburgerIcon";

const Header = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={"Teams"} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <List>
        {["Life at Fiverr", "Carrer at Fiverr"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem style={{ marginLeft: 10 }} disablePadding>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            See All Positions
          </button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="sticky top-0 bg-white z-10 ">
      <div className=" mobile-navbar ">
        <div className="flex items-center sm:gap-72 gap-4 mx-auto w-11/12 py-4">
          <div
            className=" text-black xs:mr-5"
            onClick={toggleDrawer("left", true)}
          >
            <HamburgerIcon />
          </div>
          <div>
            <Image src={fiverr} width={100} height={50} />
          </div>
        </div>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
      <div className="desktop-navbar ">
        <div className="flex justify-between items-center mx-auto w-11/12 py-4">
          <div>
            <Image src={fiverr} width={100} height={50} />
          </div>
          <div className="flex justify-around items-center gap-8">
            {headerItems.map((items, index) => (
              <div key={index} className="lg:px-1 font-bold cursor-pointer">
                <Link href={items.label ? items.link : ""}>
                  {items.label}
                  <faEye />
                </Link>
              </div>
            ))}
            <Link href="/positions" className="">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                See All Positions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
