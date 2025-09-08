import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ActivitiesSection from "./components/ActivitiesSection";
import ContactForm from "./components/ContactForm";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import WorkshopsSection from "./components/WorkshopsSection";
import AdventureGallery from "./components/AdventureGallery";
import UpcomingEvents from "./components/UpcomingEvents";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Listen for hash changes to enable simple navigation
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentPage(hash || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Set initial page

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "talleres") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <WorkshopsSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  if (currentPage === "aventura") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <AdventureGallery />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  if (currentPage === "eventos") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <UpcomingEvents />
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <ContactForm />
        <SocialSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}