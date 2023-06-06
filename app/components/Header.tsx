// Make it a client component
'use client';

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-300/100 rounded-b-2xl">
        <Image
          src="https://avatars.slack-edge.com/2021-07-19/2282472048054_9a51d280179d828b3ad7_512.png"
          width={100}
          height={50}
          alt="Trello"
          className="w-24 md:w-16 pb-10 md:pb-0 object-contain"
        ></Image>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden>Search</button>
          </form>

          {/* Avatar */}
          <Avatar name='Emad Khan' round color="#0055D1" size="50" />
        </div>
      </div>
    </header>
  );
}

export default Header;
