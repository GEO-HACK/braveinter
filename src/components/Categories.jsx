import React from "react";
import {Eye,Flame, Users, Plus, PanelRightOpen, Hash, Globe, UserSquare, MessageCircleCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


const Categories = () => {
  return (
    <div className=" text-white  w-full min-w-[180px] flex  flex-col gap-2 items-center justify-center">  
      <div className="flex items-center justify-between w-[90%] mt-2">   
        <p className="font-semibold text-gray-500">Menu</p>
        <PanelRightOpen size={23} className="text-gray-400" />
      </div>

      <button className="w-[90%] h-10 flex items-center gap-2 justify-center bg-white hover:bg-gray-200 text-black font-semibold rounded-xl mt-2 ml-2">

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
      <Accordion type="single" collapsible className="w-full  px-3">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-gray-400 hover:text-white text-md ">Custom feeds</AccordionTrigger>
          <AccordionContent>
            <Link href="/home" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
            <Plus size={24} className="text-gray-400" />
              <p className="text-sm">Custom feed</p>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-gray-400 hover:text-white text-md">Network</AccordionTrigger>
          <AccordionContent>
            <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Plus size={24} className="text-gray-400" />
              <p>New Squad</p>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold text-gray-400 hover:text-white text-md">Bookmarks</AccordionTrigger>
          <AccordionContent>
            <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Users size={24} className="text-gray-400" />
              <p className="text-sm">User</p>
            </Link>
            <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Plus size={24} className="text-gray-400" />
              <p className="text-sm">New folder</p>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="font-semibold text-gray-400 hover:text-white text-md">Discover</AccordionTrigger>
          <AccordionContent>
            <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Hash size={24} className="text-gray-400" />
              <p className="text-sm">Tags</p>
            </Link>
            <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Globe size={24} className="text-gray-400" />
              <p className="text-sm">Sources</p>
            </Link> <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <Users size={24} className="text-gray-400" />
              <p className="text-sm">LeaderBoard</p>
            </Link> <Link href="#" className="flex items-center gap-2 p-2 w-full hover:bg-gray-800 hover:text-white rounded-lg">
              <MessageCircleCode size={24} className="text-gray-400" />
              <p className="text-sm">Discussions</p>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Categories;
