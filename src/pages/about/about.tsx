import React from 'react'
import './about.css'
import me from './me.png'

export const About = () => {
  return (
    <div className={`page about`}>
      <img src={me} alt="Nana hacker" className='me' />
      <h1>About</h1>
    </div>
  )
}
