import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Heart, MessageCircle, Camera, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Dr. Mythri Reddy", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Patient Reviews", href: "/#testimonials" },
  { name: "Smile Gallery", href: "/#gallery" },
  { name: "Blog & Tips", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const servicesLinks = [
  { name: "General Dentistry", href: "/services/general-dentistry" },
  { name: "Root Canal Treatment", href: "/services/root-canal" },
  { name: "Dental Implants", href: "/services/dental-implants" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { name: "Teeth Whitening", href: "/services/teeth-whitening" },
  { name: "Braces & Aligners", href: "/services/braces-aligners" },
  { name: "Kids Dentistry", href: "/services/kids-dentistry" },
];

export function Footer() {
  return (
    <footer className="bg-clinic-navy text-white pt-16 pb-8 border-t-4 border-clinic-teal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-clinic-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-clinic-blue/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Clinic Info */}
          <div className="space-y-6">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-white rounded p-1 inline-flex">
              <img src="/Logo.png" alt="Mythri Dental Clinic Logo" className="h-16 md:h-20 w-auto" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-white leading-none">Mythri</span>
              <span className="font-medium text-xs text-clinic-teal tracking-widest uppercase mt-1">Dental Clinic</span>
            </div>
          </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience world-class dental care in a luxurious and comfortable environment. We combine advanced technology with a compassionate approach.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-clinic-teal text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-clinic-teal text-white transition-colors">
                <Camera className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-clinic-teal text-white transition-colors">
                <Globe className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-clinic-teal text-white transition-colors">
                <Briefcase className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-clinic-teal rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-clinic-teal text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-teal/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-clinic-teal rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-clinic-teal text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-clinic-teal/50"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-clinic-teal rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clinic-teal shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/cWKwDJbqdLAQWxD26" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-clinic-teal transition-colors">
                  Mythri dental clinic,<br />
                  6-158, sudarshan reddy nagar, Market road,<br />
                  Chinthal, Quthbullapur, Hyderabad, Telangana 500054
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clinic-teal shrink-0" />
                <a href="tel:+919394811911" className="text-gray-400 hover:text-clinic-teal text-sm transition-colors">
                  +91 93948 11911
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clinic-teal shrink-0" />
                <a href="mailto:info@drmythrireddydental.com" className="text-gray-400 hover:text-clinic-teal text-sm transition-colors">
                  info@drmythrireddydental.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-clinic-teal shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-clinic-teal">Sun: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Dr. Mythri Reddy Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy-policy" className="hover:text-clinic-teal transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-clinic-teal transition-colors">Terms of Service</Link>
          </div>
          <p className="text-gray-500 text-sm flex items-center gap-1 justify-center md:justify-end">
            Made with <Heart className="w-4 h-4 text-clinic-teal fill-clinic-teal" /> for healthy smiles
          </p>
        </div>
      </div>
    </footer>
  );
}
