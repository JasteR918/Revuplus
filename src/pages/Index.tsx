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
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: ⁠ url(${backgroundPattern}) ⁠,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
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
