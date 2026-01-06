import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PhoneShowcase from "@/components/landing/PhoneShowcase";
import PremiumSection from "@/components/landing/PremiumSection";
import Footer from "@/components/landing/Footer";
import backgroundPattern from "@/assets/background-pattern.png";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background pattern with parallax */}
      <div
  className="
    fixed inset-0 pointer-events-none bg-center bg-no-repeat
    opacity-20
    bg-[length:1100px]
    sm:bg-[length:1300px]
    md:bg-[length:1500px]
    lg:bg-cover
    lg:bg-fixed
    md:opacity-25
    lg:opacity-30
  "
  style={{
    backgroundImage: `url(${backgroundPattern})`,
  }}
/>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <PhoneShowcase />
        <PremiumSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
