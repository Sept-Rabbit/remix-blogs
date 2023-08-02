import { useState } from "react";
import { SearchIcon } from "~/Icons/SearchIcon";
import { Link, useNavigate } from "@remix-run/react";
import { useStore } from "~/storeData/storeData";
import type { BlogPost, SidebarProp } from "~/types/types";

export const SearchModal = ({
  searchClicked,
  setSearchClicked,
}: SidebarProp) => {
  const blogPosts = useStore((state) => state.blogPosts);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();
  let filteredPosts: BlogPost[] = [];

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setInputText(e.target.value);
    } else {
      setInputText("");
    }
  };

  if (inputText.trim().length > 0) {
    filteredPosts = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(inputText.toLowerCase())
    );
  } else {
    filteredPosts = [];
  }

  const handleRedirect = (post: BlogPost) => {
    navigate(`/javascript/${post.slug.split(".")[1]}`);
    setSearchClicked(false);
  };

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-30 w-full bg-gray-900/80 p-4 overflow-x-hidden overflow-y-auto h-full"
    >
      <div className="relative inline-block  w-full h-full p-5">
        <div className="absolute z-50 rounded-lg left-1/2 top-1/2 -translate-x-1/2 h-[500px] w-[600px] -translate-y-1/2 bg-gray-700 text-white sm:p-6 sm:pb-4">
          <div className="px-5">
            <form
              className="flex border-b pb-5 border-gray-500"
              autoComplete="off"
            >
              <SearchIcon />
              <input
                className="text-base font-medium leading-6 w-full px-5 focus:outline-none bg-gray-700"
                placeholder="Search Article"
                id="modal-title"
                onChange={handleInput}
              />
              <div className="flex justify-end text-xs text-gray-400 bg-gray-600 p-1 rounded-lg">
                <button onClick={() => setSearchClicked(!searchClicked)}>
                  ESC
                </button>
              </div>
            </form>

            <ul>
              {filteredPosts?.map((post: BlogPost) => (
                <li
                  key={post.slug}
                  className="cursor-pointer my-2 hover:bg-indigo-500 bg-gray-600/20 p-3 rounded-lg"
                  onClick={() => handleRedirect(post)}
                >
                  {post.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
