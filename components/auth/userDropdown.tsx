"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User, Settings, LogOut, LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import { useLogout } from "@/hooks";
import { ProfileModal } from "../profileModal";

interface UserDropdownProps {
  onSignIn: () => void;
  onSignOut?: () => void;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({ onSignIn, onSignOut }) => {
  const { status, data: session } = useSession();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const logout = useLogout();

  const isAuthenticated = status === "authenticated";

  const handleLogout = async () => {
    await logout();
    if (onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors" aria-label="User menu">
            <User className="w-6 h-6 text-white" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="end" className="bg-secondary text-white border-2-border p-2 rounded shadow-md min-w-[160px]">
          {isAuthenticated ? (
            <>
              <DropdownMenu.Item
                className="p-2 cursor-pointer hover:bg-primary  flex items-center gap-2 rounded"
                onSelect={() => setIsProfileOpen(true)}
              >
                <User className="w-4 h-4" />
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-primary cursor-pointer flex items-center gap-2 rounded">
                <Settings className="w-4 h-4" />
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-border my-2" />
              <DropdownMenu.Item
                onClick={handleLogout}
                className="p-2 hover:bg-primary cursor-pointer flex items-center gap-2 rounded text-red-600"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </DropdownMenu.Item>
            </>
          ) : (
            <DropdownMenu.Item onClick={onSignIn} className="p-2 cursor-pointer hover:bg-primary  flex items-center gap-2 rounded">
              <LogIn className="w-4 h-4" />
              Sign in
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {isAuthenticated && session?.user && <ProfileModal open={isProfileOpen} onOpenChange={setIsProfileOpen} data={session.user} />}
    </>
  );
};
