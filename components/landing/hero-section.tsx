import Image from "next/image";
import Link from "next/link";
import { HeroHeader } from "@/components/landing/header";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
          <div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mt-0 lg:mr-auto">
                <h1 className="mt-8 max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16">
                  BrandName
                </h1>
                <h2 className="text-4xl font-medium">
                Make NextJS 15 Apps
                </h2>
                <div className="mt-8 max-w-2xl text-lg text-pretty">
                  Just another template
                </div>

                <div className="mt-12 flex items-center gap-2">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-5 text-base"
                    >
                      <Link href="/home">
                        <span className="text-nowrap">
                          Explore Now
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mt-8 -mr-56 overflow-hidden px-2 sm:mt-12 sm:mr-0 md:mt-20">
                <div
                  aria-hidden
                  className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent from-35%"
                />
                <div className="ring-background bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg ring-1 inset-shadow-2xs shadow-zinc-950/15 dark:inset-shadow-white/20">
                  <Image
                    className="bg-background relative hidden aspect-15/8 rounded-2xl object-contain dark:block"
                    src="/preview-dark.png"
                    alt="alt text"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="border-border/25 relative z-2 aspect-15/8 rounded-2xl border object-contain dark:hidden"
                    src="/preview-light.png"
                    alt="alt text"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
