import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Navbar />
      <div className="pt-0"> {/* padding-top added if navbar overlaps content */}
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
