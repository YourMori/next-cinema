import React from "react";
import Link from "next/link";
import { TvMinimalPlay, Heart, Bookmark, Calendar, ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type NavItem = {
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: "Browse", icon: <TvMinimalPlay className="mr-[16px] w-[24px] h-[24px]" /> },
  { label: "Watchlist", icon: <Heart className="mr-[16px] w-[24px] h-[24px]" /> },
  { label: "Bookmarks", icon: <Bookmark className="mr-[16px] w-[24px] h-[24px]" /> },
  { label: "ComingSoon", icon: <Calendar className="mr-[16px] w-[24px] h-[24px]" /> },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen flex flex-col justify-between py-[50px] px-[40px] gap-[50px] bg-primary text-textSecondary text-14px font-medium">
      {/* Header */}
      <div className="flex">
        <Label className="text-textPrimary text-[20px] font-semibold">Mori</Label>
        <Label className="text-red text-[20px] font-semibold">Cinema</Label>
      </div>

      <div className="flex-grow">
        {/* News Feed */}
        <div className="border-b border-border pb-[50px]">
          <Label className="mb-[10px]">News Feed</Label>
          <ul>
            {navItems.map((item, id) => (
              <li key={id} className="mt-[22px]">
                <Link href={`/${item.label.toLowerCase()}`} className="flex items-center hover:text-white relative">
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Following */}
        <div className="border-b border-border pb-[50px] mt-[22px]">
          <Label className="mb-[10px]">Following</Label>
          <ul>
            {["User 1", "User 2", "User 3"].map((user) => (
              <li key={user} className="flex items-center mt-[22px] hover:text-white cursor-pointer">
                <Avatar className="w-[24px] h-[24px] mr-[16px]">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="font-bold">{user}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-[32px] gap-[10px] cursor-pointer">
            <Button variant={"circleRed"} className="w-[24px] h-[24px]">
              <ChevronDown className="w-[24px] h-[24px]" />
            </Button>
            <p className="text-[#928f93] hover:text-white">Lead more</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex">
        <LogOut className="hover:text-white mr-[14px]" />
        <span className="cursor-pointer hover:text-white">Log Out</span>
      </div>
    </div>
  );
};
