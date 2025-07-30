import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your sections/pages
import Home from './components/home/Home';
import Mission from './components/mission/Mission';
import Benefits from './components/benefits/Benefits';
import ContactUs from './components/contact_us/ContactUs';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

// AOS example
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Mission />
              </>
            }
          />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
