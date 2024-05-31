"use client";
import NavMenu from "./nav-menu";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Header() {
  return (
    <div className="flex items-center justify-between pb-5 pt-5">
      <div className="px-5 text-[30px]">AUonlineCS</div>
      <div className="hidden items-center justify-around px-5 md:flex">
        <DropdownMenu className="sm:flex">
          <DropdownMenuTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <NavMenu />
        <Button className="m-2">Login</Button>
      </div>
    </div>
  );
}
