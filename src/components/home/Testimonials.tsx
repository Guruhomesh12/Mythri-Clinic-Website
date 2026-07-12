"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    content: "The best dental experience I've ever had. Dr. Mythri is incredibly patient and explains every step of the procedure. The clinic feels more like a premium lounge than a hospital.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    source: "Google"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Teacher",
    content: "I was always terrified of dentists, but the painless root canal treatment here completely changed my perspective. Highly recommend their advanced and gentle approach.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    source: "Google"
  },
  {
    id: 3,
    name: "Karthik Reddy",
    role: "Business Owner",
    content: "Got my smile designing done here. The results are phenomenal! The technology they use is top-notch and the staff is extremely professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    source: "Practo"
  },
  {
    id: 4,
    name: "Anita Desai",
    role: "Homemaker",
    content: "Very clean and hygienic clinic. Took my 5-year-old son for his first checkup and Dr. Mythri handled him so beautifully. He actually looks forward to his next visit!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    source: "Google"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-clinic-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-clinic-teal blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-clinic-blue blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
            Patient Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Smiles That Speak for Us
          </h2>
          <p className="text-gray-300 text-lg">
            Don't just take our word for it. Read what our patients have to say about their experience at Dr. Mythri Reddy Dental Clinic.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-4 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] h-full flex flex-col relative group hover:bg-white/10 transition-colors">
                    <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-clinic-teal/20 transition-colors transform -scale-x-100" />
                    
                    <div className="flex items-center gap-1 text-clinic-gold mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{testimonial.role}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-500" />
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white">
                            {testimonial.source}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-clinic-teal hover:text-white" />
              <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-clinic-teal hover:text-white" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
