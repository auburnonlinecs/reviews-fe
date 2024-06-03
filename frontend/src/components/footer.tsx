"use client";
import NavMenu from "./nav-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Footer() {
  return (
    <div className="flex items-center justify-between pb-5 pt-5">
      <div className="px-5 text-[30px]">AUonlineCS</div>
      <div className="flex justify-end">
        <div className="hidden items-center justify-around px-5 md:flex">
          <NavMenu />
        </div>
        <div className="flex items-center px-5 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <NavMenu />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button className="m-2 px-5">Login</Button>
      </div>
    </div>
  );
}
