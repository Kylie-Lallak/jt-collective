import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
