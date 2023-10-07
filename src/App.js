import logo from './logo.svg';
import './App.css';

import React, { Suspense, lazy } from 'react';

// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));

const App = () => (
  <Router /* basename="/jargon-cards-v2" */ >
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);

function About(params) {
  return <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      This is the ABOUT section.
    </p>
  </header>
</div>;
}

export default App;
