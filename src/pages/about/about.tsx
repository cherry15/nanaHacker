import React from 'react'
import './about.css'
import me from './me.png'

export const About = () => {
  return (
    <div className={`page about`}>
      <section className="content">
        <img src={me} alt="Nana hacker" className="me" />
        <h1>Nana hacker</h1>
        <p className='first-para'>
          I am a highly organized IT professional with a wealth of experience in
          the public and private sectors who has worked on a range of projects
          from conception through to delivery.
        </p>
        <p>
          I am proficient at Javascript, es6, typescript, vue2/3, jest unit
          testing framework, react v17, axios/redux and state management,
          angular2+, angularjs, jasmine, frontend architecture, building
          re-usable components, accessibility standards, coding standards, CSS
          modules, SASS, CSS (including flex and grid), JSON, HTML4/5. I am
          competent with consuming and creating RESTful APIs with SPAs. I also
          have experience of backend technologies using nodejs, expressjs and
          mongodb. Other backend technologies I have used are PHP and Java.
        </p>
      </section>
    </div>
  )
}
