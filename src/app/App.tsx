import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SuccessStories } from './components/SuccessStories';
import { Resources } from './components/Resources';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <SuccessStories />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
