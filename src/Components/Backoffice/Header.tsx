"use client";
import { useEffect, useState } from "react";
import Logout from "../Auth/logout";
import { useUserdata } from "@/app/hooks/useUserData";

const Header = () => {
  let userDetails= useUserdata();


  return (
    <div className="w-full bg-gray-600 h-17 flex justify-between items-center p-5">
      <div className="text-white text-lg font-semibold">
        Product Management Panel
      </div>
      <div className="flex items-center">
        <div className="text-white">Hello, {userDetails?.name || "Guest"}</div>
        <Logout />
      </div>
    </div>
  );
};

export default Header;
