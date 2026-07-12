import { Metadata } from "next";
import Image from "next/image";
import { Award, GraduationCap, Heart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Mythri Reddy",
  description: "Learn more about Dr. Mythri Reddy, our mission, vision, and the premium dental care experience we provide.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-clinic-light">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-clinic-teal font-semibold tracking-wider uppercase text-sm mb-4 block">
            About Our Clinic
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-clinic-navy mb-6">
            Meet Dr. Mythri Reddy
          </h1>
          <p className="text-gray-600 text-lg">
            Dedicated to providing world-class dental care with a gentle touch and a passion for creating beautiful, healthy smiles.
          </p>
        </div>

        {/* Doctor Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Mythri Reddy" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-clinic-navy mb-4">A Legacy of Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                With over 15 years of clinical experience, Dr. Mythri Reddy has transformed thousands of smiles. Her approach combines advanced dental science with an artistic eye, ensuring every treatment is both functional and beautiful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She believes that a visit to the dentist should be a relaxing, premium experience. From the moment you walk into the clinic, every detail is designed for your comfort and peace of mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-clinic-teal/10 flex items-center justify-center text-clinic-teal shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-clinic-navy">Expert Qualifications</h4>
                  <p className="text-sm text-gray-500">MDS in Conservative Dentistry</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-clinic-teal/10 flex items-center justify-center text-clinic-teal shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-clinic-navy">Award Winning</h4>
                  <p className="text-sm text-gray-500">Best Dentist Award 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-clinic-navy text-white p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-teal/20 rounded-full blur-2xl" />
            <Heart className="w-10 h-10 text-clinic-teal mb-6" />
            <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver exceptional, pain-free dental care using the latest technology, while building long-lasting relationships based on trust, transparency, and compassion.
            </p>
          </div>
          <div className="bg-white text-clinic-navy p-12 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-clinic-blue/10 rounded-full blur-2xl" />
            <Star className="w-10 h-10 text-clinic-teal mb-6" />
            <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the premier dental destination in the region, known for luxury healthcare, aesthetic excellence, and transforming the way people perceive dental visits.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
