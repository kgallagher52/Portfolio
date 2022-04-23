import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { App } from './App'
import { Navigation } from './navigation'
import './index.css'


const Routing = () => {
  return (
    <section className='flex'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
)
