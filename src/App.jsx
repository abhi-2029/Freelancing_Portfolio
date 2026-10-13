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
