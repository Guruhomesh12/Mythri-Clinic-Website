"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, HeartPulse, Microscope } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "Advanced Technology",
    description: "Equipped with digital X-rays, intraoral scanners, and modern sterilization protocols for precise and safe treatments.",
    icon: Microscope
  },
  {
    title: "Pain-Free Procedures",
    description: "We prioritize your comfort with modern anesthesia techniques and a gentle, compassionate approach.",
    icon: HeartPulse
  },
  {
    title: "Experienced Specialist",
    description: "Dr. Mythri Reddy brings years of specialized experience in delivering predictable and aesthetic results.",
    icon: Shield
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. We provide clear treatment plans and affordable options tailored to your needs.",
    icon: CheckCircle2
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-clinic-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern dental clinic equipment" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-clinic-navy/20 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-clinic-teal/10 rounded-full flex items-center justify-center text-clinic-teal">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-clinic-navy">100% Sterilized</h4>
                  <p className="text-xs text-gray-500">International standards</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div>
            <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-6">
              A Premium Dental Experience You Can Trust
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              We redefine dental visits by combining clinical excellence with a luxurious, relaxing atmosphere. Your smile is our signature.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-clinic-teal mb-4">
                    <reason.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-clinic-navy mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
