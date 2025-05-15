"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TvMinimalPlay, Heart, Bookmark, Calendar, ChevronDown, LogOut, Dot, WifiHigh } from "lucide-react";
import { Button, Label, Avatar, AvatarFallback, AvatarImage, Container } from "@/components/ui";

type NavItem = {
  label: string;
  icon: React.ReactNode;
};

type User = {
  id: number;
  name: string;
  image: string;
  isActive: boolean;
};

const navItems: NavItem[] = [
  { label: "Browse", icon: <TvMinimalPlay className="mr-[16px] w-[22px] h-[22px]" /> },
  { label: "Watchlist", icon: <Heart className="mr-[16px] w-[22px] h-[22px]" /> },
  { label: "Bookmarks", icon: <Bookmark className="mr-[16px] w-[22px] h-[22px]" /> },
  { label: "ComingSoon", icon: <Calendar className="mr-[16px] w-[20px] h-[20px]" /> },
];

const users: User[] = [
  { id: 1, name: "User 1", image: "https://github.com/shadcn.png", isActive: true },
  { id: 2, name: "User 2", image: "https://github.com/shadcn.png", isActive: true },
  { id: 3, name: "User 3", image: "https://github.com/shadcn.png", isActive: true },
  { id: 4, name: "User 4", image: "https://github.com/shadcn.png", isActive: false },
  { id: 5, name: "User 5", image: "https://github.com/shadcn.png", isActive: false },
];

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>("Browse");

  return (
    <Container className="sticky top-0 left-0 z-50 min-w-[272px] h-screen flex flex-col justify-between py-[50px] text-textSecondary text-base font-regular border-r border-border bg-primary">
      {/* Header */}
      <div className="flex">
        <Label className="text-textPrimary text-lg font-semibold">Mori</Label>
        <Label className="text-red text-lg font-semibold">Cinema</Label>
      </div>

      <div className="flex-grow mt-[50px]">
        {/* News Feed */}
        <div className="border-b border-border pb-[50px]">
          <Label className="mb-[10px]">News Feed</Label>
          <ul>
            {navItems.map((item, id) => {
              const isActive = activeItem === item.label;
              return (
                <li key={id} className="mt-[22px] relative">
                  <Link
                    href={`/${item.label.toLowerCase()}`}
                    onClick={() => setActiveItem(item.label)}
                    className={`flex items-center relative hover:text-white transition-colors ${isActive ? "text-white" : ""}`}
                  >
                    {/* Red bar */}
                    {item.icon}
                    {item.label}
                  </Link>
                  {isActive && <span className="absolute left-[-40px] top-[-4px] h-[30px] w-[2px] bg-red rounded-sm" />}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Following */}
        <div className="border-b border-border pb-[50px] mt-[22px]">
          <Label className="mb-[10px]">Following</Label>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="flex items-center mt-[22px] hover:text-white cursor-pointer">
                <Avatar className="w-6 h-6 mr-[16px]">
                  <AvatarImage src={user.image} alt="avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex w-full justify-between items-center">
                  <span className="font-bold">{user.name}</span>
                  {user.isActive ? <Dot className="text-green" /> : <WifiHigh className="text-textPrimary" />}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center mt-[32px] gap-[10px] cursor-pointer">
            <Button variant={"default"} rounded={"full"} className="w-[24px] h-[24px]">
              <ChevronDown className="w-6 h-6" />
            </Button>
            <p className="text-textSecondary hover:text-white">Lead more</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex cursor-pointer hover:text-white">
        <LogOut className="mr-[14px] font-regular" />
        <span>Log Out</span>
      </div>
    </Container>
  );
};
