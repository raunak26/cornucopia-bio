import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your sections/pages
import Home from './components/home/home';
import Mission from './components/mission/mission';
import Benefits from './components/benefits/benefits';
import AboutUs from './components/about_us/about_us';
import ContactUs from './components/contact_us/contact_us';
import Navbar from './components/Navbar/Navbar';

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
          {/* 
            SINGLE-PAGE for Home + Mission
            When user goes to "/", they see Home AND Mission in one page.
          */}
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Mission />
              </>
            }
          />

          {/* MULTI-PAGE routes for the other sections */}
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* 
            OPTIONAL: A catch-all route if needed:
            <Route path="*" element={<NotFound />} />
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
