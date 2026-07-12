"use client";

import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Sparkles, Smile, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Comprehensive care for your daily dental health, including checkups, cleaning, and fillings.",
    icon: Stethoscope,
    href: "/services/general-dentistry"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with premium veneers, professional teeth whitening, and smile design.",
    icon: Sparkles,
    href: "/services/cosmetic-dentistry"
  },
  {
    id: "orthodontics",
    title: "Braces & Aligners",
    description: "Straighten your teeth invisibly with clear aligners or modern traditional braces.",
    icon: Smile,
    href: "/services/braces-aligners"
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Immediate relief for severe toothache, broken teeth, or urgent dental situations.",
    icon: ShieldAlert,
    href: "/services/emergency-dental-care"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-gray-600 text-lg">
              We provide a full range of high-quality dental services under one roof, using state-of-the-art technology to ensure your comfort and the best possible outcomes.
            </p>
          </div>
          <Link href="/services" className={buttonVariants({ variant: "outline", className: "hidden md:inline-flex rounded-full px-6" })}>
            View All Services <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={service.href} className="block h-full">
                <div className="bg-clinic-light rounded-[2rem] p-8 h-full transition-all duration-300 hover:bg-clinic-navy hover:-translate-y-2 hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-clinic-teal mb-6 group-hover:bg-clinic-teal/20 group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-clinic-navy mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 group-hover:text-gray-300 transition-colors line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-clinic-teal font-semibold group-hover:text-clinic-gold transition-colors mt-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className={buttonVariants({ variant: "outline", className: "rounded-full px-8 w-full sm:w-auto" })}>
            View All Services <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
