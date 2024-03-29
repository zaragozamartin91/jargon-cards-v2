import logo from '../logo.svg'
import '../App.css'

import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is the main page, now being deployed on a custom workflow</p>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      
      <Link to="/about">About this page</Link>
      <Link to="/jargon-card-demo">Jargon card demo</Link>
      <Link to="/tinder-card-demo">Tinder card demo</Link>
      <Link to="/react-spring-demo">React spring demo</Link>

      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
}