import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { About } from './pages/about/about'
import { Code } from './pages/code/code'
import { Nav } from './features/nav/nav'

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </div>
    </>
  )
}

export default App
