import React from 'react'
import './app.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { About } from './pages/about/about'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Code } from './pages/code/code'
import { Nav } from './features/nav/nav'

const App = () => {
  const location = useLocation()
  return (
    <>
      <Nav />
      <div className='container'>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/code" element={<Code />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  )
}

export default App
