import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-blue-600 text-white'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="text-lg font-bold text-gray-800">
        Paste App
      </div>

      <div className="flex flex-row gap-2">
        <NavLink to='/' className={linkStyles} end>
          Home
        </NavLink>

        <NavLink to='/pastes' className={linkStyles}>
          Pastes
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar