import { motion } from 'framer-motion';
import { Container, Section } from '@components/common';
import { useScrollAnimation } from '@hooks';
import { contactInfo, socialLinks } from '@data';

const ContactInfo = () => {
  const [ref, controls] = useScrollAnimation(0.2);

  const SocialIcon = ({ name, className = '' }) => {
    const icons = {
      instagram: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      linkedin: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      facebook: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    };
    return <span className={`w-6 h-6 ${className}`}>{icons[name]}</span>;
  };

  return (
    <Section spacing="large" ref={ref} aria-labelledby="contact-info-heading">
      <Container>
        <motion.div
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 } },
          }}
          initial="hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 id="contact-info-heading" className="font-serif text-h2 text-burgundy mb-8">Contact Information</h2>
              <p className="font-mono text-body text-charcoal/70 leading-relaxed mb-10">
                We'd love to hear about your project. Reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-cream-light rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="font-mono text-body text-charcoal/80 link-underline hover:text-burgundy">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-cream-light rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="font-mono text-body text-charcoal/80 link-underline hover:text-burgundy">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-cream-light rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Location</h3>
                    <p className="font-mono text-body text-charcoal/80">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-cream-light rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-mono text-label text-olive uppercase tracking-wider mb-1">Business Hours</h3>
                    <p className="font-mono text-body text-charcoal/80">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-h2 text-burgundy mb-8">Social Media</h2>
              <p className="font-mono text-body text-charcoal/70 leading-relaxed mb-8">
                Stay connected and see our latest work, insights, and village gatherings.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-cream border border-charcoal/10 rounded-lg hover:border-burgundy hover:bg-cream-light transition-all duration-base group"
                    aria-label={social.label}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-cream-light rounded-lg group-hover:bg-burgundy group-hover:text-cream transition-colors duration-base">
                      <SocialIcon name={social.icon} className="group-hover:text-cream" />
                    </div>
                    <div>
                      <h3 className="font-serif text-h4 text-burgundy group-hover:text-cream transition-colors duration-base">{social.label}</h3>
                      <p className="font-mono text-body-sm text-charcoal/60 group-hover:text-cream/80 transition-colors duration-base">@{social.label.toLowerCase()}</p>
                    </div>
                    <svg className="ml-auto w-5 h-5 text-charcoal/40 group-hover:text-burgundy transition-colors duration-base" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ContactInfo;