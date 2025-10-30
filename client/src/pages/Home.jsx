// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import ActionCards from '../components/ActionCards';
import HowItWorks from '../components/HowItWorks';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';
import ItemGrid from '../components/ItemGrid';

function Home() {
  return (
    <>
      <HeroSection />

      <div className="container py-5">
        <ActionCards />
        <HowItWorks />

        <section className="mt-5">
          <h4 className="text-dark mb-4">Recent Lost/Found Items</h4>
          <ItemGrid />
        </section>

        <FAQSection />
        <Testimonials />
      </div>
    </>
  );
}

export default Home;
