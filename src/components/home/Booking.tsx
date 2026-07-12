"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar as CalendarIcon, Clock, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address.").optional().or(z.literal("")),
  date: z.string().min(1, "Please select a preferred date."),
  time: z.string().min(1, "Please select a preferred time."),
  treatment: z.string().min(1, "Please select a treatment type."),
  message: z.string().optional(),
});

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      treatment: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const treatmentMap: Record<string, string> = {
      'consultation': 'General Consultation',
      'cleaning': 'Teeth Cleaning',
      'root-canal': 'Root Canal',
      'implants': 'Dental Implants',
      'braces': 'Braces / Aligners',
      'whitening': 'Teeth Whitening',
      'other': 'Other'
    };
    const treatmentName = treatmentMap[values.treatment] || values.treatment;
    const timeName = values.time === 'morning' ? 'Morning (10 AM - 1 PM)' : values.time === 'evening' ? 'Evening (6 PM - 9 PM)' : values.time;

    const text = `Hello Mythri Dental Clinic 👋,

I would like to request an appointment. Here are my details:

👤 *Name:* ${values.name}
📞 *Phone:* ${values.phone}
${values.email ? `📧 *Email:* ${values.email}\n` : ''}
🗓 *Preferred Date:* ${values.date}
⏰ *Preferred Time:* ${timeName}
🦷 *Treatment:* ${treatmentName}
${values.message ? `\n📝 *Additional Message:* ${values.message}` : ''}

Looking forward to your confirmation! Thank you.`;
    
    const encodedText = encodeURIComponent(text);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(`https://wa.me/919394811911?text=${encodedText}`, '_blank');
    }, 1000);
  }

  return (
    <section id="booking" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Info */}
          <div className="md:w-5/12 bg-clinic-navy text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-clinic-teal rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 mb-12">
              <h3 className="font-heading text-3xl font-bold mb-4">Book Your Visit</h3>
              <p className="text-gray-300">
                Schedule your appointment today. Our team will get back to you to confirm the time and details.
              </p>
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Clinic Address</h4>
                  <a href="https://maps.app.goo.gl/cWKwDJbqdLAQWxD26" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm hover:text-white transition-colors">
                    Mythri dental clinic, 6-158, sudarshan reddy nagar, Market road, Chinthal, Quthbullapur, Hyderabad, Telangana 500054
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us Directly</h4>
                  <a href="tel:+919394811911" className="text-gray-300 text-sm hover:text-white transition-colors">+91 93948 11911</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-clinic-teal" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-7/12 p-10 md:p-14 bg-white relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-clinic-navy">Appointment Requested!</h3>
                <p className="text-gray-600 max-w-sm">
                  Thank you for booking with Dr. Mythri Reddy Dental Clinic. Our team will contact you shortly to confirm your appointment.
                </p>
                <Button 
                  onClick={() => {
                    setIsSuccess(false);
                    form.reset();
                  }}
                  variant="outline"
                  className="rounded-full mt-4"
                >
                  Book Another Appointment
                </Button>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-clinic-navy font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-gray-50/50 h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-clinic-navy font-semibold">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 90000 00000" className="bg-gray-50/50 h-12 rounded-xl" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-clinic-navy font-semibold">Email Address (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" className="bg-gray-50/50 h-12 rounded-xl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-clinic-navy font-semibold">Preferred Date *</FormLabel>
                          <FormControl>
                            <Input type="date" className="bg-gray-50/50 h-12 rounded-xl text-gray-600" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-clinic-navy font-semibold">Preferred Time *</FormLabel>
                          <FormControl>
                            <select 
                              className="flex h-12 w-full items-center justify-between rounded-xl border border-input bg-gray-50/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-600"
                              {...field}
                            >
                              <option value="">Select Time</option>
                              <option value="morning">Morning (10 AM - 1 PM)</option>
                              <option value="evening">Evening (6 PM - 9 PM)</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="treatment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-clinic-navy font-semibold">Treatment Interested In *</FormLabel>
                        <FormControl>
                          <select 
                            className="flex h-12 w-full items-center justify-between rounded-xl border border-input bg-gray-50/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-gray-600"
                            {...field}
                          >
                            <option value="">Select Treatment</option>
                            <option value="consultation">General Consultation</option>
                            <option value="cleaning">Teeth Cleaning</option>
                            <option value="root-canal">Root Canal</option>
                            <option value="implants">Dental Implants</option>
                            <option value="braces">Braces / Aligners</option>
                            <option value="whitening">Teeth Whitening</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-clinic-navy font-semibold">Message / Symptoms (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly describe your dental issue or any specific requirements..." 
                            className="bg-gray-50/50 rounded-xl resize-none min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl bg-clinic-teal hover:bg-clinic-teal/90 text-white text-lg font-semibold shadow-lg shadow-clinic-teal/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        Book Appointment
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
