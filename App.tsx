import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import RootLayout from './app/layout';

// Import Pages
import HomePage from './app/page';
import ServicesPage from './app/services/page';
import PaymentPage from './app/payment/page'; // Imported new page
import PortfolioPage from './app/portfolio/page';
import ProcessPage from './app/process/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');

  const handleNavigation = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      
      case 'services':
        return <ServicesPage onNavigate={handleNavigation} />;
      
      case 'payment':
      case 'pricing':
        return <PaymentPage onNavigate={handleNavigation} />;
      
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigation} />;
        
      case 'process':
        return <ProcessPage onNavigate={handleNavigation} />;

      case 'about':
        return (
          <>
            <Navbar activePage="about" onNavigate={handleNavigation} />
            <AboutPage />
          </>
        );
      case 'contact':
        return <ContactPage onNavigate={handleNavigation} />;
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <RootLayout>
      {renderContent()}
      <Footer onNavigate={handleNavigation} />
    </RootLayout>
  );
};

export default App;