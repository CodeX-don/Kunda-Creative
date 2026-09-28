import { Outlet } from 'react-router-dom';
import { Header } from '@components/layout';
import { Footer } from '@components/layout';
import { GrainOverlay } from '@components/common';
import { PageTransition } from '@components/common';

const Layout = () => {
  return (
    <>
      <GrainOverlay />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-burgundy focus:text-cream focus:rounded-md focus:font-mono focus:text-label">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20 lg:pt-24 min-h-screen" role="main">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
};

export default Layout;