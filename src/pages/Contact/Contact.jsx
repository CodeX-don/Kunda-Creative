import { PageHeader } from '@components/sections';
import { ContactInfo } from '@components/sections';
import { ContactForm } from '@components/sections';
import contactTelephone from '@assets/images/Analog Objects/Bakelite Telephone Beside Radio.jpeg';

const Contact = () => {
  return (
    <>
      <PageHeader
        heading="THE VINTAGE TELEPHONE"
        subheading="A symbol of nostalgia, elegance and the timeless art of creative communication and storytelling."
        image={contactTelephone}
        imageAlt="Black Bakelite rotary telephone beside a vintage wooden radio on lace cloth"
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default Contact;