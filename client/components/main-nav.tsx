"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { UserContext } from "@/context/UserContext/UserContext";

export function MainNav() {
  const pathname = usePathname();

  const { user } = React.useContext(UserContext);
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl mr-6 flex items-center">
          <span className="bg-foreground text-background w-8 h-8 rounded-full flex items-center justify-center mr-2">D</span>
          Deploy
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6 hidden md:flex">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/features"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/features"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/pricing"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/docs"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Documentation
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/blog"
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Blog
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          {
            user._id &&
            <Link href="/dashboard">
            <Button variant="ghost" className="hidden md:flex">
              Dashboard
            </Button>
          </Link>
          }
          { 
            !user._id &&
          <Link href="/login">
            <Button>
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
          }
        </div>
      </div>
    </div>
  );
}