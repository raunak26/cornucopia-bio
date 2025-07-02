import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//INject APollo
// ✅ Apollo script injection
const initApollo = () => {
  const n = Math.random().toString(36).substring(7);
  const script = document.createElement('script');
  script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`;
  script.async = true;
  script.defer = true;
  script.onload = function () {
    if (window.trackingFunctions?.onLoad) {
      window.trackingFunctions.onLoad({
        appId: '6745595821bf2d01b1d901d4',
      });
    }
  };
  document.head.appendChild(script);
};

// Call it before rendering
initApollo();
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
