import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailButton from './components/EmailButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Trading from './pages/Trading';
import Academy from './pages/Academy';
import About from './pages/About';
import OurProjects from './pages/OurProjects';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-surface relative flex min-h-screen flex-col overflow-x-hidden">
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            aria-hidden
          >
            <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/25 blur-[100px] dark:bg-cyan-500/15" />
            <div className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-600/20 blur-[100px] dark:bg-violet-500/12" />
            <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[90px] dark:bg-blue-500/10" />
          </div>
          <Navbar />
          <main className="relative flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/trading" element={<Trading />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<OurProjects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <EmailButton />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
