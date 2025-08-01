"use client";

import { ThemeButton } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { useScroll } from "motion/react";
import Link from "next/link";
import React from "react";

export const HeroHeader = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        className={cn(
          "fixed z-20 w-full border-b transition-colors duration-150",
          scrolled && "bg-background/50 backdrop-blur-3xl",
        )}
      >
        <div className="container mx-auto px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                BrandName
              </Link>
            </div>

            <SignedIn>
              <div className="flex items-center gap-2">
                <ThemeButton />
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                  <Button asChild variant="outline" size="sm">
                    <SignInButton>
                      <span>Login</span>
                    </SignInButton>
                  </Button>
                  <Button asChild size="sm">
                    <SignUpButton>
                      <span>Sign Up</span>
                    </SignUpButton>
                  </Button>
                </div>
              </div>
            </SignedOut>
          </div>
        </div>
      </nav>
    </header>
  );
};
