import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className='navigation'>
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
        <Link to="/Projects" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</Link>
        <Link to="/About" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</Link>
        <Link to="/Contact" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</Link>
      </nav>
    </div>
  )
}
