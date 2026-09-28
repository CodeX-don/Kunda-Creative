import { HeroVideo } from '@components/sections';
import { AboutPreview } from '@components/sections';
import { ServicesGrid } from '@components/sections';
import { BrandPhilosophy } from '@components/sections';
import { CTA } from '@components/sections';

const Home = () => {
  return (
    <>
      <HeroVideo />
      <AboutPreview />
      <ServicesGrid />
      <BrandPhilosophy />
      <CTA
        heading="Let's tell your story"
        subheading="Ready to elevate your brand?"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;