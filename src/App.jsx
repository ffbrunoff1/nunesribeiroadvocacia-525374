import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkAreasPage from './pages/WorkAreasPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import OfficesPage from './pages/OfficesPage';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/areas-atuacao" element={<WorkAreasPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/escritorios" element={<OfficesPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
