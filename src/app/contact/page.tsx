import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Dr. Mythri Reddy Dental Clinic. Find our location, contact details, and clinic hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-gray-600 text-lg">
            Whether you have a question about treatments, pricing, or need to book an appointment, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-clinic-navy mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-clinic-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-clinic-navy mb-2">Visit Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Premium Care Avenue,<br />
                      Health District, City - 500000<br />
                      Landmark: Near Central Park
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-clinic-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-clinic-navy mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">For appointments & emergencies:</p>
                    <a href="tel:+919394811911" className="text-lg font-bold text-clinic-teal hover:text-clinic-navy transition-colors">
                      +91 93948 11911
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-clinic-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-clinic-navy mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:info@drmythrireddydental.com" className="text-lg font-bold text-clinic-teal hover:text-clinic-navy transition-colors">
                      info@drmythrireddydental.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-clinic-teal/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-clinic-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-clinic-navy mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="flex justify-between w-48"><span>Mon - Sat:</span> <span>9:00 AM - 8:00 PM</span></p>
                      <p className="flex justify-between w-48 text-clinic-teal font-medium"><span>Sunday:</span> <span>By Appointment</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-[3rem] overflow-hidden min-h-[500px] relative shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.418296316715!2d78.43555239999999!3d17.3947844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9747c3e390c5%3A0x629c15b9c0f99479!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: "500px" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
          
        </div>

      </div>
    </div>
  );
}
