import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Sparkles, Smile, ShieldAlert, Baby, Activity } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Dental Services",
  description: "Explore our comprehensive range of premium dental services including root canals, implants, cosmetic dentistry, and more.",
};

const allServices = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and preventative care to keep your smile healthy and bright.",
    icon: Stethoscope,
    href: "/services/general-dentistry"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and professional teeth whitening services.",
    icon: Sparkles,
    href: "/services/cosmetic-dentistry"
  },
  {
    id: "orthodontics",
    title: "Braces & Aligners",
    description: "Straighten your teeth with modern clear aligners or traditional braces for a perfect bite.",
    icon: Smile,
    href: "/services/braces-aligners"
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth that restore full function.",
    icon: Activity,
    href: "/services/dental-implants"
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    description: "Gentle, specialized care for children in a fun and welcoming environment.",
    icon: Baby,
    href: "/services/kids-dentistry"
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Immediate attention for severe toothaches, trauma, or urgent dental issues.",
    icon: ShieldAlert,
    href: "/services/emergency-dental-care"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
            What We Do
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-6">
            Premium Dental Services
          </h1>
          <p className="text-gray-600 text-lg">
            We offer a comprehensive suite of dental treatments under one roof, utilizing the latest technology and materials to ensure optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service) => (
            <div key={service.id} className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-clinic-teal/10 flex items-center justify-center text-clinic-teal mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-clinic-navy mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 flex-grow">
                {service.description}
              </p>
              <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className={buttonVariants({ variant: "outline", className: "w-full rounded-full group" })}>
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-clinic-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-clinic-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Ready to transform your smile?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Book a consultation with Dr. Mythri Reddy today and take the first step towards a healthier, more confident you.
          </p>
          <Link href="/#booking" className={buttonVariants({ size: "lg", className: "bg-clinic-teal hover:bg-clinic-teal/90 rounded-full px-8 relative z-10 text-white" })}>
            Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </div>
  );
}
