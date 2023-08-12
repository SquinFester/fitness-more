"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/DropdownMenu";
import { Button } from "../ui/Button";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { ChevronDown, LineChart, LogOut } from "lucide-react";

const UserMenu = ({ fullname }: { fullname: string }) => {
  const name = fullname.split(" ")[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-xl md:text-lg">
          {name}
          <ChevronDown className="w-6 h-6 text-primaryblue ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" align="end">
        <DropdownMenuItem asChild className="text-xl md:text-base">
          <Link href="/dashboard">
            <LineChart className="w-4 h-4 mr-2" />
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-zinc-500" />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-xl md:text-base"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserMenu;
