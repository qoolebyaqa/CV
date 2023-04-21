import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Education from './components/education/education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Education />      
      <p className="read-the-docs">
      </p>
    </div>
  )
}

export default App
