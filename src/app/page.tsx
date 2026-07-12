import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Booking } from "@/components/home/Booking";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <FAQ />
    </div>
  );
}
