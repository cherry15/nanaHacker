import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import {ReactComponent as Logo} from './logo.svg'

export const Nav = () => {
  return (
    <nav>
      <NavLink to={'/'} className={`logo ({ isActive }) => (isActive ? 'active' : '')`} aria-label="Home"><Logo /></NavLink>
      <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
      <NavLink to={'/code'} className={({ isActive }) => (isActive ? 'active' : '')}>Code</NavLink>
    </nav>
  )
}
