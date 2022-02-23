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
          I am proficient at typescript, javascript, es6, vue2/3, jest, react, axios/redux and state management,
          angular2+, frontend architecture, building
          re-usable components, accessibility standards, coding standards, CSS
          modules, SASS, CSS, JSON, consuming and creating RESTful APIs with SPAs. I also
          have experience of backend technologies using nodejs, expressjs and
          mongodb. Other backend technologies I have used are PHP and Java.
        </p>
      </section>
    </div>
  )
}
