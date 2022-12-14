import Image from "next/image";
import { UsersIcon } from "@heroicons/react/solid";
import { GlobeIcon, MenuIcon, SearchIcon, UserCircleIcon } from "./icons/Icons";
function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* middle search*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
          <input
            type="text"
            placeholder="Start your search"
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          />
          {/* !search icon */}
          <SearchIcon />
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeIcon />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon />
            <UserCircleIcon />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
