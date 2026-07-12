"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, PhoneCall, CalendarPlus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3 dark:bg-clinic-navy/90 dark:border-gray-800"
          : "bg-white/60 backdrop-blur-sm py-5 dark:bg-clinic-navy/60"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-clinic-teal text-white flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
              MR
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-tight text-clinic-navy dark:text-white">
                Dr. Mythri Reddy
              </span>
              <span className="text-xs text-clinic-teal font-medium tracking-wider uppercase">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-clinic-teal",
                  pathname === link.href
                    ? "text-clinic-teal"
                    : "text-gray-600 dark:text-gray-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919394811911" className="flex items-center gap-2 text-sm font-semibold text-clinic-navy dark:text-white hover:text-clinic-teal transition-colors">
              <PhoneCall className="w-4 h-4 text-clinic-teal" />
              <span>+91 93948 11911</span>
            </a>
            <button className={buttonVariants({ className: "bg-clinic-teal hover:bg-clinic-teal/90 text-white rounded-full px-6 shadow-md shadow-clinic-teal/20 transition-all hover:shadow-lg" })}>
              <CalendarPlus className="w-4 h-4 mr-2" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-clinic-navy dark:text-white" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full mt-10">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "text-lg font-medium p-2 rounded-md transition-colors",
                          pathname === link.href
                            ? "bg-clinic-light text-clinic-teal dark:bg-gray-800"
                            : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto mb-8 flex flex-col gap-4">
                    <a href="tel:+919394811911" className={buttonVariants({ variant: "outline", className: "w-full justify-start text-clinic-navy dark:text-white" })}>
                      <PhoneCall className="w-4 h-4 mr-2 text-clinic-teal" />
                      Call Us Now
                    </a>
                    <button className={buttonVariants({ className: "w-full justify-start bg-clinic-teal hover:bg-clinic-teal/90 text-white shadow-md shadow-clinic-teal/20" })}>
                      <CalendarPlus className="w-4 h-4 mr-2" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
