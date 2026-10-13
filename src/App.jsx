import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { SelectedWork } from "./sections/SelectedWork";
import { ProjectEstimator } from "./sections/ProjectEstimator";
import { EngagementModels } from "./sections/EngagementModels";
import { ComparisonMatrix } from "./sections/ComparisonMatrix";
import { TechnicalExpertise } from "./sections/TechnicalExpertise";
import { About } from "./sections/About";
import { HowIWork } from "./sections/HowIWork";
import { WhyWorkWithMe } from "./sections/WhyWorkWithMe";
import { FAQ } from "./sections/FAQ";
import { FreelanceCTA } from "./sections/FreelanceCTA";
import { Contact } from "./sections/Contact";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // 1. Force manual scroll restoration so browsers do not remember previous scroll
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Clear any section hash on reload/refresh so page always returns to Home
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 3. Jump to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 4. Ensure scroll position is reset before page unloads
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <ProjectEstimator />
        <EngagementModels />
        <ComparisonMatrix />
        <TechnicalExpertise />
        <About />
        <HowIWork />
        <WhyWorkWithMe />
        <FAQ />
        <FreelanceCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
