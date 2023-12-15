import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, Globe } from "lucide-react";
import Link from "next/link";

const mobileMenuLinks = [
  { id: 1, title: "Sign in", href: "/" },
  { id: 2, title: "Get Started", href: "/" },
  { id: 3, title: "Pricing", href: "/" },
  { id: 4, title: "Features", href: "/" },
  { id: 5, title: "Contact", href: "/contact" },
];

export default function ActionButtons() {
  return (
    <section>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  {mobileMenuLinks.map((link) => {
                    const { id, title, href } = link;
                    return (
                      <Link href={href} key={id} passHref>
                        {title}
                      </Link>
                    );
                  })}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4 items-center text-sm font-semibold">
        <div className="border-r h-6 border-gray-400 hidden lg:block">
          <div className="mr-4">
            <Globe className="h-6 w-6 text-gray-500" />
          </div>
        </div>
        <Link href={"/contact"} className="text-sm flex gap-1">
          Contact <span className="hidden md:flex">Sales</span>
        </Link>
        <Button className="" variant={"ghost"}>
          Sign in
        </Button>
        <Button className="bg-black text-md rounded-md">Get Started</Button>
      </div>
    </section>
  );
}
