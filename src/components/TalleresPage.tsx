import Header from "./Header";
import WorkshopsSection from "./WorkshopsSection";
import Footer from "./Footer";

export default function TalleresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WorkshopsSection />
      </main>
      <Footer />
    </div>
  );
}