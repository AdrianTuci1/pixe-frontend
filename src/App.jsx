import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import FlowStream from './components/FlowStream';
import Mission from './components/Mission';
import Commitment from './components/Commitment';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import './PatternMasks.css';

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <FlowStream />
    <Mission />
    <Commitment />
    <CallToAction />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="scroll-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
