import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
      </ul>
    </>
  )
}
