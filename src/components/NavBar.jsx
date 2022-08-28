import React from 'react';

const NavBar = () => {
  const handleClick = () => {
    const btn = document.querySelector("button.menu-button");
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }
  
  return (
    <header className="shadow-md">
      <div className="w-full text-gray-700 bg-white">
        <div className="flex flex-col px-2 mx-auto md:items-center md:justify-between md:flex-row">
          <div className="px-1 py-4 flex flex-row items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">Rene's Place</a>
          </div>
          <nav className="hidden flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/">Home</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/About">About</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Photos">Photos</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Things">Around Town</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Contact">Contact</a>
          </nav>
          <div className="flex items-center pl-1 md:hidden lg:hidden">
            <button className="ouline-none menu-button" onClick={handleClick}>
              <svg
                className="w-8 h-8 text-gray-500"
                x-show="! showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 00 24 24"
                stroke="currentColor"
              >
                <path d="M4 12h16M4 6h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden mobile-menu my-2">
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/">Home</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/About">About</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Photos">Photos</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Things">Around Town</a>
            <a className="px-2 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar