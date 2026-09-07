import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 ${
      isActive
        ? 'bg-white text-blue-600 shadow-sm'
        : 'text-blue-50 hover:bg-blue-500/50 hover:text-white'
    }`

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-900 shadow-md">
      <div className="flex items-center gap-2 text-xl font-bold text-white tracking-tight cursor-pointer transition-transform duration-200 hover:scale-105">
        <span className="text-2xl">📋</span>
        Paste App
      </div>

      <div className="flex flex-row gap-2">
        <NavLink to='/' className={linkStyles} end>
          Home
        </NavLink>

        <NavLink to='/pastes' className={linkStyles} end>
          Pastes
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar