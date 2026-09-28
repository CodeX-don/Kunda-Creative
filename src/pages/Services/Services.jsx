import { PageHeader } from '@components/sections';
import { ServicesTabs } from '@components/sections';
import { Process } from '@components/sections';
import { FAQ } from '@components/sections';
import { WorkShowcase } from '@components/sections';
import { CTA } from '@components/sections';
import servicesWorkspace from '@assets/images/workspace aesthetic/Studio photo vintage IA.jpeg';

const Services = () => {
  return (
    <>
      <PageHeader
        heading="OUR SERVICES"
        subheading="Three pillars of creative excellence"
        image={servicesWorkspace}
        imageAlt="Vintage photo studio interior with typewriter, lamps and cameras in warm light"
        variant="offset"
      />
      <ServicesTabs />
      <Process />
      <WorkShowcase />
      <FAQ />
      <CTA
        heading="Ready to start your project?"
        buttonText="Get in Touch"
        buttonLink="/contact"
        variant="inverted"
      />
    </>
  );
};

export default Services;