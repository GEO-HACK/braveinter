import React from "react";
import Image from "next/image";
import {Bell, Sparkles, Search, Grid2x2Plus,Flame ,Zap} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono border-b border-gray-500 px-4">
      {/* Logo */}
      <Image src="/logo2.png" alt="Brave Logo" width={100} height={100} />

      {/* Search Bar */}
      <div className="relative flex justify-between items-center w-[400px]">
        <input
          type="text"
          className="peer bg-slate-950 w-full h-[50px] rounded-xl p-2 pl-10 border-none outline-none"
          placeholder="Search posts"
        />
        <Search
          size={24}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white"
        />

        {/* Ctrl + K Shortcut */}
        <div className="peer-focus:hidden flex gap-2 items-center absolute top-1/2 right-2 transform -translate-y-1/2">
          <button className="bg-slate-950 px-3 py-1 rounded-xl border border-gray-600 h-[30px] flex items-center justify-center">
            Ctrl
          </button>
          +
          <button className="bg-slate-950 px-3 py-1 rounded-xl border border-gray-600 h-[30px] flex items-center justify-center">
            K
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex justify-between items-center gap-2">
        <div className=" bg-red-500 text-black rounded-xl min-w p-6  h-12 flex items-center justify-center gap-2 ">
          <Sparkles size={24} className="text-black" />
          <p className="text-md font-semibold">Level Up with Plus</p>
        </div>
        <div className="bg-slate-800 h-12 w-12 rounded-xl flex items-center justify-center">
          <Grid2x2Plus size={24} className="text-white" />
        </div>{" "}
        <div className="bg-slate-800 h-12 w-12 rounded-xl flex items-center justify-center">
          <Bell size={24} className="text-white" />
        </div>
        <div className="bg-slate-800 h-12 w-48 gap-2 rounded-xl flex items-center justify-evenly">
            <div className="text-red-500 flex items-center gap-1 hover:border-b-2 border-red-500">
                <Flame size={24} className="text-red-500" />
                <p>0</p>
            </div>
            <div className="text-purple-500 flex items-center gap-1">
            <Zap size={24} className="text-purple-500" />
            <p>2</p>
            </div>

            <div>
                <Image src="/profile.webp" alt="Profile Picture" width={30} height={30} className="rounded-full"/>
            </div>

        

        </div>
      </div>
    </div>
  );
};

export default Navbar;
