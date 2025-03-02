import React from "react";
import Categories from "./components/Categories";

const page = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/4">
        <Categories />
      </div>

      <div className="w-3/4 p-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti
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

export default page;
