"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

export default function NavMenu() {
  return (
    <main className="flex items-center justify-center overflow-auto bg-white ">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col justify-around px-12 md:flex-row">
          <NavigationMenuItem>
            <Link href="/courses/courses-overview" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Courses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/professors/professor-overview" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Professors
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/account" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Account
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  );
}
