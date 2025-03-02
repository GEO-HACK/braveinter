import React from "react";
import Categories from "@/app/components/Categories"; // Ensure correct import

const Page = () => {
  return (
    <div className="flex flex-row w-full">
      {/* Sidebar */}
      <div className="w-[15%] min-w-[180px]">
        <Categories />
      </div>

      {/* Border Divider */}
      <div className="border-l border-gray-500 h-screen"></div>

      {/* Main Content */}
      <div className="w-[85%] p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti
        veritatis adipisci voluptatem, culpa harum commodi ducimus labore
        mollitia, illo recusandae eius cumque quam praesentium dolore maiores
        reiciendis eaque! Dolorem! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Cum voluptas dolorum dignissimos maiores possimus unde
        ipsum, doloremque voluptate omnis natus incidunt rerum dolorem neque
        nulla laudantium vitae, facilis repellendus placeat.
      </div>
    </div>
  );
};

export default Page;
