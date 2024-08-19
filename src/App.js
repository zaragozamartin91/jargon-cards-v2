import React, { Suspense, lazy } from 'react'

// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const JargonCardDemo = lazy(() => import('./routes/JargonCardDemo'))
const TinderCardDemo = lazy(() => import('./routes/TinderCardDemo'))
const ReactSpringDemo = lazy(() => import('./routes/ReactSpringDemo'))

const App = () => (
  <Router /* basename="/jargon-cards-v2" */ >
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jargon-card-demo" element={<JargonCardDemo />} />
        <Route path="/tinder-card-demo" element={<TinderCardDemo />} />
        <Route path="/react-spring-demo" element={<ReactSpringDemo />} />
      </Routes>
    </Suspense>
  </Router>
)

export default App
