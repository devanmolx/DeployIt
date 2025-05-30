"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Home, Settings, LogOut, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/UserContext/UserContext";
import Cookies from "js-cookie"

export function DashboardNav() {
  const pathname = usePathname();

  const { user } = React.useContext(UserContext);

  function handleLogout() {
    Cookies.remove("token");
    window.location.href = "/login"
  }
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl mr-6 flex items-center">
          <span className="bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center mr-2">D</span>
          Deploy
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 hidden md:flex">
          <Link
            href="/dashboard"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/dashboard"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Overview
          </Link>
          <Link
            href="/dashboard/projects"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname?.startsWith("/dashboard/projects")
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Projects
          </Link>
          <Link
            href="/dashboard/analytics"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/dashboard/analytics"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/dashboard/settings"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-destructive w-2 h-2 rounded-full"></span>
          </Button>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src={user.photoUrl} alt="User" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Home className="mr-2 h-4 w-4" /> Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}