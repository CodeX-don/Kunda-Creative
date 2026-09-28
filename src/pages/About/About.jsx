import { PageHeader } from '@components/sections';
import { OriginStory } from '@components/sections';
import { FoundersQuote } from '@components/sections';
import { VillageConcept } from '@components/sections';
import { BrandSymbols } from '@components/sections';
import { Values } from '@components/sections';
import { CTA } from '@components/sections';
import aboutStoryteller from '@assets/images/Human Connection/ZELO.jpeg';

const About = () => {
  return (
    <>
      <PageHeader
        heading="WE ARE KUNDA CREATIVE"
        subheading="Two young Namibian professionals. One vision."
        image={aboutStoryteller}
        imageAlt="Reader holding a newspaper, face emerging between blurred pages in warm light"
        variant="editorial"
      />
      <OriginStory />
      <FoundersQuote />
      <VillageConcept />
      <BrandSymbols />
      <Values />
      <CTA
        heading="Want to be part of our village?"
        buttonText="Let's Connect"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;