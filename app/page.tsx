import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Benefits from "@/components/sections/benefits";
import Collaboration from "@/components/sections/collaboration";
import ContactForm from "@/components/sections/contactus";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
// import Roadmap from "@/components/sections/roadmap";
import Services from "@/components/sections/services";
import ButtonGradient from "@/components/svg/button-gradient";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <div className={cn("overflow-hidden bg-[#0E0C15] pt-[4.75rem] lg:pt-[5.25rem]")}>
        <Navbar />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
        <ContactForm />
        <Footer />
      </div>
      <ButtonGradient />
    </main>
  );
}
