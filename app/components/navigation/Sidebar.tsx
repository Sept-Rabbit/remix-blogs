import { ChevronLeft } from "~/Icons/ChevronLeft";
import { CategoryIcon } from "~/Icons/CategoryIcon";
import { HomeIcon } from "~/Icons/HomeIcon";
import { SearchIcon } from "~/Icons/SearchIcon";
import { useState } from "react";
import { Link } from "@remix-run/react";

type SidebarProp = {
  searchClicked: boolean;
  setSearchClicked: (searchClicked: boolean) => void;
};

export const Sidebar = ({ searchClicked, setSearchClicked }: SidebarProp) => {
  const [clicked, setClicked] = useState(false);

  const handleSidebarCloseButton = () => {
    setClicked(!clicked);
  };

  return (
    <div className="text-gray-600 bg-gray-50 lg:h-screen">
      <main>
        {/* <button
          onClick={handleSidebarCloseButton}
          className="hidden lg:block w-10 p-1.5 h-10 ml-16 mb-10 border border-gray-300 rounded-lg cursor-pointer"
        >
          <ChevronLeft />
        </button> */}

        <ul
          className={`${
            clicked
              ? "-translate-x-[14rem] transition-all duration-1000 ease-in-out"
              : "translate-x-0 transition-all duration-1000 ease-in-out"
          } flex lg:flex-col lg:items-center sm:flex-row lg:justify-center py-8 w-full lg:space-x-0 p-20 sm:space-x-5 lg:space-y-5 lg:mt-10 sm:text-2xl lg:text-base`}
        >
          <Link to="/">
            <li className="flex items-center cursor-pointer">
              <span className="mr-5">
                <HomeIcon />
              </span>
              <h5 className="w-20">Home</h5>
            </li>
          </Link>
          {/* <li className="flex items-center cursor-pointer">
            <span className="mr-5">
              <CategoryIcon />
            </span>
            Category
          </li> */}
          <li
            onClick={() => setSearchClicked(!searchClicked)}
            className="flex items-center cursor-pointer"
          >
            <span className="mr-5">
              <SearchIcon />
            </span>
            <h5 className="w-20">Search</h5>
          </li>
        </ul>
      </main>
    </div>
  );
};
