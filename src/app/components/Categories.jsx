import React from "react";
import {Eye,Flame, Users, Plus, PanelRightOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className=" text-white  w-full min-w-[180px] flex  flex-col gap-2 items-center justify-center">  
      <div className="flex items-center justify-between w-[90%] mt-2">   
        <p className="font-semibold text-gray-500">Menu</p>
        <PanelRightOpen size={23} className="text-gray-400" />
      </div>

      <button className="w-[90%] h-10 flex items-center gap-2 justify-center bg-white text-black font-semibold rounded-xl mt-2 ml-2">

        <Plus size={24} className="text-black" />
        New Post
    
      </button>
      <section className="w-full flex items-start pl-2 flex-col  mt-2">
        <Link href="/home"  className="flex text-gray-400 items-center gap-2 hover:bg-gray-800 p-2 w-full hover:text-white">
            <Image src="/profile.webp" alt="Profile Picture" width={30} height={30} className="rounded-full"/>
            <p className="text-sm">My feed</p>

        </Link>
        <Link href="#" className="flex text-gray-400 items-center gap-2 hover:bg-gray-800 p-2 w-full hover:text-white">
        <Users size={24} className="text-gray-400" />
        <p>Following</p>
        </Link>
        <Link href="#" className="flex text-gray-400 items-center gap-2 hover:bg-gray-800 p-2 w-full hover:text-white">
        <Flame size={24} className="text-gray-400" />
        <p className="text-sm">Explore</p>
        </Link> 
        <Link href="#" className="flex text-gray-400 items-center gap-2 hover:bg-gray-800 p-2 w-full hover:text-white">
        <Eye size={24} className="text-gray-400" />
        <p className="text-sm">History</p>
        </Link>
            


      </section>
    </div>
  );
};

export default Categories;
