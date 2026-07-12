"use client";

import { motion } from "framer-motion";
import { Star, StarHalf, Quote } from "lucide-react";
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
    name: "Rajesh Kumar",
    role: "IT Professional",
    content: "Visited Dr. Mythri for a root canal. I was very anxious, but she made the whole process completely painless. The clinic is very clean and the staff is super polite. Highly recommended for anyone in Hyderabad!",
    rating: 4.9,
    source: "Google"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Teacher",
    content: "I had my smile designing done here. The results are phenomenal! The technology they use is top-notch and they took the time to explain everything to me in detail.",
    rating: 4.8,
    source: "Google"
  },
  {
    id: 3,
    name: "Amit Desai",
    role: "Business Owner",
    content: "Very clean and hygienic clinic. Took my 5-year-old son for his first checkup and Dr. Mythri handled him so beautifully. He actually looks forward to his next visit!",
    rating: 4.9,
    source: "Practo"
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Homemaker",
    content: "The best dental experience I've ever had. Dr. Mythri is incredibly patient and the clinic feels more like a premium lounge than a hospital. Excellent service.",
    rating: 4.7,
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
                    
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-1 text-clinic-gold">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="flex">
                            {i < Math.floor(testimonial.rating) ? (
                              <Star className="w-5 h-5 fill-current" />
                            ) : i < testimonial.rating ? (
                              <StarHalf className="w-5 h-5 fill-current" />
                            ) : (
                              <Star className="w-5 h-5 text-gray-600" />
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="text-white font-semibold text-lg">{testimonial.rating}</span>
                    </div>
                    
                    <p className="text-gray-200 text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
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
