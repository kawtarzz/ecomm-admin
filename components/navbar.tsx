"use client";

import { UserButton } from "@clerk/clerk-react";

import { MainNav } from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          THis will be a store switcher
        </div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
          This will be the routes
        </div>
      </div>
    </div>
  )
}

export default Navbar;