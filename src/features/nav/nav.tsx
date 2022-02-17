import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
  return (
    <nav>
      <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>NH</NavLink>
      <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
      <NavLink to={'/code'} className={({ isActive }) => (isActive ? 'active' : '')}>Code</NavLink>
    </nav>
  )
}
