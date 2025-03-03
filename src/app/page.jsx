import React from "react";
import Categories from "@/components/Categories"; //category component
import MainList from "@/components/MainList"; //main list component

const Page = () => {
  return (
    <div className="flex flex-row w-full bg-black">
      {/* Sidebar */}
      <div className="w-[15%] min-w-[180px]">
        <Categories />
      </div>

      {/* Border Divider */}
      <div className="border-l border-gray-500 h-screen"></div>

      {/* Main Content */}
      <div className="w-[85%] p-4">
        <MainList />
       
      </div>
    </div>
  );
};

export default Page;
