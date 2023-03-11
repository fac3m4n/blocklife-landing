import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 items-center px-6">
      <div className="flex space-x-6 items-center">
        <div className="text-2xl">BlockLife</div>
        <div>Menu</div>
      </div>
      <div>mint button</div>
    </div>
  );
};

export default Navbar;
