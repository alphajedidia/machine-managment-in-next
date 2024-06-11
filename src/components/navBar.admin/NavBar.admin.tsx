import React from "react";
import Logo from "../navbar/Logo";
import Notif from "../icons/Notif";
import { Logout } from "../icons";
const NavBarAdmin = ({ NavTitle }: { NavTitle: String }) => {
  return (
    <nav className=" text-xl h-20 fixed top-0 z-50 w-full bg-secondary-400 border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <Logo logoHeight={220} logoWidth={220} />
          </div>

          <div className="text-2xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-300">
              {NavTitle}
            </span>
          </div>

          <div className="flex items-center ">
            <div className="flex  items-center ms-3">
              <div className="flex items-center w-56 justify-between ">
                <Notif iconStyle="w-8 h-8  text-primary-400 hover:cursor-pointer" />
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    className="w-14 h-14 rounded-full"
                    src="/G.jpeg"
                    alt="user photo"
                  />
                </button>
                <button className=" flex border p-2 rounded-full border-secondary-100 text-secondary-100 hover:text-error-500 hover:border-error-500">
                  <Logout iconStyle="w-10 h-10 pr-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
