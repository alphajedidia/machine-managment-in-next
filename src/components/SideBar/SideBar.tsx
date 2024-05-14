import React from "react";
import ChartDonut from "../charts/Chart.Donut";
import { Calendar, Cart,ChartIcon,Client, Location,Map, Truck} from "../icons";
import LinkSideBar from "./LinkSideBar";
import { signOut } from "next-auth/react";
import { link } from "fs";
import Logout from "../icons/Logout";
const SideNavItem = [
  {
    link: "/admin",
    title: "Dashboard",
    icon: <ChartIcon iconStyle="h-8 w-8" />,
  },
  {
    link: "/admin/location",
    title: "Location",
    icon: <Location iconStyle="h-8 w-8" />,
  },{
   link: "/admin/client",
   title: "Client",
   icon: <Client iconStyle="h-8 w-8" />,
 },
 {
  link: "/admin/engin",
  title: "Engin",
  icon: <Truck iconStyle="h-8 w-8" />,
},
  {
    link: "/admin/localisation",
    title: "Localisation",
    icon: <Map iconStyle="h-8 w-8" />,
  },
  {
    link: "/admin/calendrier",
    title: "Calendrier",
    icon: <Calendar iconStyle="h-8 w-8" />,
  },
  {
    link: "/auth",
    title: "Déconnection",
    icon: <Logout iconStyle="h-8 w-8" />,
    onClick: () => signOut(),
  },
];

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-72 overflow-hidden h-screen  text-xl pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-secondary-400 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="flex flex-col justify-around h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-secondary-400">
        <ul className="space-y-2 font-medium">
          {SideNavItem &&
            SideNavItem.map((item, key) => (
              <LinkSideBar 
                key={key}
                link={item.link}
                title={item.title}
                icon={item.icon}
                route={item.link}
                onClick={item.onClick}
              />
            ))}
        </ul>
        <div className=" overflow-hidden flex flex-col justify-center items-center w-full h-60 ">
          <ChartDonut />
          <span className="text-primary-100">ENTREPÔT</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
