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
    <div className="flex w-1/5 justify-end text-gray-600 bg-gray-50">
      <main className="w-full my-12">
        <button
          onClick={handleSidebarCloseButton}
          className="w-10 p-1.5 h-10 ml-10 mb-10 border border-gray-300 rounded-lg cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <ul
          className={`${
            clicked
              ? "-translate-x-[12rem] transition-all duration-1000 ease-in-out"
              : "translate-x-0 transition-all duration-1000 ease-in-out"
          } text-left ml-12 flex flex-col space-y-5 text-base`}
        >
          <Link to="/">
            <li className="flex items-center cursor-pointer">
              <span className="mr-5">
                <HomeIcon />
              </span>
              Home
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
            Search
          </li>
        </ul>
      </main>
    </div>
  );
};
