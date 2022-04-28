import React from 'react'
import { Navigation } from './components/navigation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Dashboard } from './components/dashboard'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Projects } from './components/projects'

export const App = () => {
  return (
    <section className='flex'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </section>
  )
}
