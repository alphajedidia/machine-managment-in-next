import React from "react";
import Logo from "../navbar/Logo";
import Notif from "../icons/Notif";
const NavBarAdmin = ({NavTitle}:{NavTitle:String}) => {
  return (
    <nav className=" text-xl h-20 fixed top-0 z-50 w-full bg-secondary-400 border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <Logo logoHeight={240} logoWidth={240} />
          </div>

          <div className="text-3xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-100">
              {NavTitle}
            </span>
          </div>

          <div className="flex items-center ">
            <div className="flex  items-center ms-3">
              <div className="flex items-center w-48 justify-between ">
                <Notif iconStyle="w-10 h-10  text-primary-400 hover:cursor-pointer" />
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    className="w-16 h-16 rounded-full"
                    src="public/G.jpeg"
                    alt="user photo"
                  />
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
