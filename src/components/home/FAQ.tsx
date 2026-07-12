"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is root canal treatment painful?",
    answer: "No. With modern anesthesia and advanced techniques, a root canal is no more uncomfortable than getting a regular filling. We ensure you are completely numb and comfortable throughout the procedure."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care, good oral hygiene, and regular dental checkups, dental implants can last a lifetime. They are the most durable and natural-looking solution for missing teeth."
  },
  {
    question: "What is the right age for kids to visit the dentist?",
    answer: "The American Dental Association recommends that a child's first dental visit should be within six months after their first tooth appears, but no later than their first birthday. Early visits help prevent cavities and build good habits."
  },
  {
    question: "Do you offer emergency dental care?",
    answer: "Yes! We reserve slots for dental emergencies like severe toothaches, broken teeth, or knocked-out teeth. Please call us immediately if you experience a dental emergency."
  },
  {
    question: "How much does a smile makeover cost?",
    answer: "The cost varies depending on the specific procedures needed (like veneers, whitening, or aligners). We offer a comprehensive consultation where we discuss your goals and provide a customized, transparent treatment plan."
  },
  {
    question: "Are clear aligners better than traditional braces?",
    answer: "Clear aligners (like Invisalign) offer an invisible, removable, and comfortable alternative to traditional braces. However, for very complex orthodontic issues, traditional braces might still be recommended. We can determine the best option during your consultation."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-clinic-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="w-16 h-16 rounded-2xl bg-clinic-teal/10 flex items-center justify-center text-clinic-teal mb-6">
              <HelpCircle className="w-8 h-8" />
            </div>
            <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
              Common Questions
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Find answers to some of the most common questions our patients ask. If you don't see your question here, feel free to contact us.
            </p>
            <a 
              href="tel:+919394811911" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-clinic-navy text-white font-medium hover:bg-clinic-navy/90 transition-colors"
            >
              Call for more info
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3 w-full"
          >
            <Accordion type="single" className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-gray-100 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-lg text-clinic-navy hover:text-clinic-teal hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
