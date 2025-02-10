import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

// Import your sections/pages
import Home from './components/home/home';
import Mission from './components/mission/mission';
import Benefits from './components/benefits/benefits';
import ContactUs from './components/contact_us/contact_us';
import Navbar from './components/navbar/navbar';

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
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
