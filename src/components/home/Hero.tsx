"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { CalendarPlus, PhoneCall, ShieldCheck, Stethoscope, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Years Experience", value: "15+", icon: Stethoscope },
  { label: "Happy Patients", value: "10k+", icon: Star },
  { label: "Treatments Done", value: "25k+", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-clinic-light">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-clinic-teal/10 rounded-bl-[100%] blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-clinic-blue/10 rounded-tr-[100%] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-clinic-teal/20 text-sm font-medium text-clinic-teal"
            >
              <span className="w-2 h-2 rounded-full bg-clinic-teal animate-pulse" />
              Premium Dental Care in Hyderabad
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-clinic-navy leading-[1.1]">
              Healthy Smiles <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinic-teal to-clinic-blue">
                Begin Here
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              Advanced Dental Care with Compassion, Precision & Modern Technology. Experience a pain-free, luxurious journey to your perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link href="#booking" className={buttonVariants({ size: "lg", className: "h-14 px-8 bg-clinic-teal hover:bg-clinic-teal/90 text-white rounded-full shadow-lg shadow-clinic-teal/20 text-lg transition-transform hover:-translate-y-1" })}>
                <CalendarPlus className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <a href="tel:+919394811911" className={buttonVariants({ size: "lg", variant: "outline", className: "h-14 px-8 rounded-full border-2 border-clinic-navy/10 text-clinic-navy hover:bg-clinic-navy/5 text-lg transition-transform hover:-translate-y-1" })}>
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-200 w-full">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-clinic-gold mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Image/Stats Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-full min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-clinic-teal/20 to-transparent rounded-[2rem] transform rotate-3 scale-105" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Mythri Reddy checking a patient's smile" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -left-6 bottom-12 flex flex-col gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.2 }}
                  className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-clinic-teal/10 flex items-center justify-center text-clinic-teal">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-clinic-navy leading-none">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
