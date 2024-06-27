import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div>
      <div className="p-4 bg-white flex ">
        <Search />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
