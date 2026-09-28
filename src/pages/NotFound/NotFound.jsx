import { Link } from 'react-router-dom';
import { Container, Section } from '@components/common';
import { Button } from '@components/common';

const NotFound = () => {
  return (
    <Section spacing="x-large" className="min-h-[70vh] flex items-center justify-center">
      <Container variant="narrow" className="text-center">
        <h1 className="font-serif text-9xl lg:text-[180px] text-burgundy/20 mb-4" aria-hidden="true">404</h1>
        <h2 className="font-serif text-h1 text-burgundy mb-6">Page Not Found</h2>
        <p className="font-mono text-body-lg text-charcoal/70 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="large" as={Link} to="/">
            Back to Home
          </Button>
          <Button variant="outline" size="large" as={Link} to="/contact">
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;