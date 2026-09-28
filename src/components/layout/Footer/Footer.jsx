import { Link } from 'react-router-dom';
import { Container } from '@components/common';
import { VintageTelephone } from '@components/vintage';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quick: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Digital Services', path: '/services#digital' },
      { label: 'Social Media Services', path: '/services#social' },
      { label: 'Professional Production', path: '/services#production' },
    ],
  };

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com/kundacreative', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/kundacreative', icon: 'linkedin' },
    { label: 'Facebook', href: 'https://facebook.com/kundacreative', icon: 'facebook' },
  ];

  const contactInfo = {
    email: 'hello@kundacreative.com',
    phone: '+264 XX XXX XXXX',
    location: 'Namibia',
    hours: 'Mon-Fri, 9am-5pm WAST',
  };

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
    <footer className="bg-cream border-t border-charcoal/10" role="contentinfo">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 lg:mb-16">
            <div className="max-w-xs">
              <Link to="/" className="flex items-center gap-1 mb-6" aria-label="Kunda Creative - Home">
                <span className="font-serif text-h3 text-burgundy">KUNDA</span>
                <span className="font-mono text-label text-olive uppercase tracking-wider">CREATIVE</span>
              </Link>
              <p className="font-mono text-body-sm text-charcoal/70 leading-relaxed mb-6">
                A digital creative agency rooted in African hospitality, where stories gather and brands belong.
              </p>
              <div className="space-y-2 font-mono text-body-sm text-charcoal/70">
                <p>
                  <span className="text-olive font-medium">Email:</span>{' '}
                  <a href={`mailto:${contactInfo.email}`} className="link-underline">
                    {contactInfo.email}
                  </a>
                </p>
                <p>
                  <span className="text-olive font-medium">Phone:</span>{' '}
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="link-underline">
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="text-olive font-medium">Location:</span> {contactInfo.location}
                </p>
                <p>
                  <span className="text-olive font-medium">Hours:</span> {contactInfo.hours}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-h4 text-burgundy mb-6">Quick Links</h3>
              <nav aria-label="Quick links">
                <ul className="space-y-3">
                  {footerLinks.quick.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="font-mono text-body-sm text-charcoal/70 link-underline hover:text-burgundy transition-colors duration-fast"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <h3 className="font-serif text-h4 text-burgundy mb-6">Our Services</h3>
              <nav aria-label="Services">
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="font-mono text-body-sm text-charcoal/70 link-underline hover:text-burgundy transition-colors duration-fast"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="pt-8 lg:pt-12 border-t border-charcoal/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="font-mono text-body-sm text-charcoal/50">
                  © {currentYear} Kunda Creative. All rights reserved.
                </span>
                <nav aria-label="Social media">
                  <ul className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="text-charcoal/50 hover:text-burgundy transition-colors duration-fast flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md"
                        >
                          <SocialIcon name={social.icon} className="w-6 h-6" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-grain-subtle opacity-20 rounded-[14px_18px_15px_19px/18px_14px_19px_15px]"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-center p-2">
                    <VintageTelephone className="w-28 h-28 lg:w-36 lg:h-36 text-burgundy/70" />
                    <span className="sr-only">Vintage telephone - symbol of timeless communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;