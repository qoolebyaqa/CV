import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Education from './components/education/education'
import Exp from './components/exp/exp'

function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Education />
      <Exp />      
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App
