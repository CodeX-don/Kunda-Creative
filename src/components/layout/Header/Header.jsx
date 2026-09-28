import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@components/common';
import { Button } from '@components/common';

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const lastFocusedElement = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen((prev) => prev ? false : prev);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      lastFocusedElement.current = document.activeElement;
      mobileMenuRef.current?.focus();
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
        if (e.key === 'Tab') {
          const focusableElements = mobileMenuRef.current?.querySelectorAll(
            'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;
          
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-base ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="banner"
    >
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link
            to="/"
            className="flex items-center z-10"
            aria-label="Kunda Creative - Home"
          >
            <span className="font-serif text-h3 text-burgundy">KUNDA</span>
            <span className="font-mono text-label text-olive ml-1 uppercase tracking-wider">CREATIVE</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Main navigation">
            <ul className="flex items-center gap-10">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`font-mono text-label uppercase tracking-wider transition-colors duration-fast relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-burgundy after:content-[''] after:transition-all after:duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 ${
                      location.pathname === item.path
                        ? 'text-burgundy after:w-full'
                        : 'text-charcoal hover:text-burgundy'
                    }`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="small" as={Link} to="/contact" className="hidden lg:inline-flex">
              Get in Touch
            </Button>
          </nav>

          <button
            className="lg:hidden p-3 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-full h-0.5 bg-burgundy transition-all duration-base ${
                  isMobileMenuOpen ? 'top-1/2 rotate-45 translate-y-[-50%]' : 'top-0'
                }`}
                aria-hidden="true"
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-burgundy transition-all duration-base ${
                  isMobileMenuOpen ? 'opacity-0' : 'top-1/2 translate-y-[-50%]'
                }`}
                aria-hidden="true"
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-burgundy transition-all duration-base ${
                  isMobileMenuOpen ? 'top-1/2 -rotate-45 translate-y-[-50%]' : 'bottom-0'
                }`}
                aria-hidden="true"
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              tabIndex={-1}
              className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-sm border-t border-charcoal/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="navigation"
              aria-label="Mobile menu"
            >
              <div className="py-8 px-6 space-y-6">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-serif text-h3 transition-colors duration-fast block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-burgundy after:content-[''] after:transition-all after:duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy focus-visible:ring-offset-2 ${
                          location.pathname === item.path
                            ? 'text-burgundy after:w-full'
                            : 'text-charcoal hover:text-burgundy'
                        }`}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-charcoal/10">
                  <Button variant="primary" size="large" as={Link} to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
};

export default Header;