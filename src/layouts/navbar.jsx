import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav style={{ backgroundColor: '#442f2a' }} className="px-8 py-4 flex items-center justify-between fixed top-0 right-0 left-0 ">

      {/* Logo */}
      <span style={{ color: '#fff7ec' }} className="text-xl font-semibold tracking-wide">
        Nook & Brew
      </span>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: '#fff7ec',
            textDecoration: isActive ? 'underline' : 'none',
            opacity: isActive ? 1 : 0.75,
          })}
          className="font-medium hover:opacity-100 transition-opacity"
        >
          Home
        </NavLink>

        <NavLink
          to="/rooms"
          style={({ isActive }) => ({
            color: '#fff7ec',
            textDecoration: isActive ? 'underline' : 'none',
            opacity: isActive ? 1 : 0.75,
          })}
          className="font-medium hover:opacity-100 transition-opacity"
        >
          Study Rooms
        </NavLink>

        <NavLink
          to="/menu"
          style={({ isActive }) => ({
            color: '#fff7ec',
            textDecoration: isActive ? 'underline' : 'none',
            opacity: isActive ? 1 : 0.75,
          })}
          className="font-medium hover:opacity-100 transition-opacity"
        >
          Our Menu
        </NavLink>
      </div>

      {/* Admin Button */}
      <NavLink to="/admin">
        <button
          style={{ backgroundColor: '#A65B71', color: '#fff7ec' }}
          className="px-5 py-2 rounded-2xl font-medium hover:opacity-90 transition-opacity cursor-pointer"
        >
          Admin
        </button>
      </NavLink>

    </nav>
  )
}
