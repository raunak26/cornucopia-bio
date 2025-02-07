import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/home';
import Mission from './components/mission/mission';
import Benefits from './components/benefits/benefits';
import About_Us from './components/about_us/about_us';

import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Home />
                <Mission />
                <Benefits />
                <About_Us />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
