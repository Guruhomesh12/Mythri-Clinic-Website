"use client";

import { MessageCircle, Phone, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919394811911" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat on WhatsApp"
        className={buttonVariants({ size: "icon", className: "h-12 w-12 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] hover:text-white border-none shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110" })}
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Phone Button (Mobile Only) */}
      <a 
        href="tel:+919394811911" 
        aria-label="Call Us"
        className={buttonVariants({ size: "icon", className: "md:hidden h-12 w-12 rounded-full bg-clinic-blue text-white hover:bg-clinic-blue/90 hover:text-white border-none shadow-lg shadow-clinic-blue/30 transition-transform hover:scale-110" })}
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Floating Appointment Button */}
      <button
        type="button"
        className={buttonVariants({ variant: "default", size: "icon", className: "h-12 w-12 rounded-full bg-clinic-teal text-white hover:bg-clinic-teal/90 border-none shadow-lg shadow-clinic-teal/30 transition-transform hover:scale-110" })}
        onClick={() => {
          // In a real app, this might open a modal or scroll to the booking section
          const bookingSection = document.getElementById('booking');
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/#booking';
          }
        }}
        aria-label="Book Appointment"
      >
        <Calendar className="h-6 w-6" />
      </button>
    </div>
  );
}
