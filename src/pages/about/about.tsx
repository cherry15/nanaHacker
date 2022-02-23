import React from 'react'
import './about.css'
import me from './me.png'

export const About = () => {
  return (
    <div className={`page about`}>
      <img src={me} alt="Nana hacker" className="me" />
      <section className="content">
        <h1>Nana hacker</h1>
        <p className='first-para'>
          I am a highly organized IT professional with a wealth of experience in
          the public and private sectors.
        </p>
        <p>
          I am proficient at typescript, javascript, es6, vue, jest, react, axios/redux and state management,
          angular, frontend architecture, building
          re-usable components, a11y, coding standards, CSS
          modules, SASS, JSON, consuming and creating RESTful APIs. I also
          have experience of nodejs, expressjs, mongodb, PHP and Java.
        </p>
      </section>
    </div>
  )
}
