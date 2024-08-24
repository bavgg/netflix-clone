"use client"

import {
  BellIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Logo from "./logo";
import { useState } from "react";

export default function Navbar() {
  const [browseIsOpen, setBrowseIsOpen] = useState(false);

  function handleBrowse() {
    setBrowseIsOpen(!browseIsOpen);
  }
  return (
    <header
      id="header"
      className="p-6 sm:px-8 lg:mx-auto lg:max-w-[83%] bg-inherit text-white  flex gap-4 justify-between items-center"
    >
      <div className="flex gap-4 items-center ">
        <div className="h-6 md:h-10 ">
          <Logo fill="var(--accent)" width="auto" height="100%" />
        </div>

        <div className="md:flex gap-4 items-center whitespace-nowrap hidden">
          <div>Home</div>
          <div>Series</div>
          <div>Films</div>
          <div>New & Popular</div>
          <div>My List</div>
          <div>Browse by languages</div>
        </div>

        <div
          onClick={handleBrowse}
          className="flex gap-1 items-center md:hidden relative cursor-pointer"
        >
          <div>Browse</div>
          {browseIsOpen ? (
            <>
              <ChevronUpIcon height={16} />
              <div className="bg-black text-white border border-gray-500 absolute top-[30px] p-4  whitespace-nowrap flex flex-col gap-4  items-center">
                <div>Home</div>
                <div>Series</div>
                <div>Films</div>
                <div>New & Popular</div>
                <div>My List</div>
                <div>Browse by languages</div>
              </div>
            </>
          ) : (
            <ChevronDownIcon height={16} />
          )}
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <MagnifyingGlassIcon height={24} />
        <BellIcon height={24} />
        <div className="flex gap-[2px] items-center">
          <UserIcon height={24} />
          <ChevronDownIcon height={16} />
        </div>
      </div>
    </header>
  );
}
