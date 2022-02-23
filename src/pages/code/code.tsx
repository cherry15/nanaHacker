import React from 'react'
import { motion } from 'framer-motion'
import './code.css'

export const Code = () => {
  const [isActive, setIsActive] = React.useState(false)
  const openGithub = (): void => {
    window.open('https://github.com/cherry15/cc2022react')
  }
  return (
    <div className="page code">
      <motion.div
        className="github"
        onClick={() => setIsActive(!isActive)}
        animate={{
          rotate: isActive ? 90 : 270,
        }}
      ></motion.div>
      <button onClick={openGithub} className="button-github">
        Code
      </button>
    </div>
  )
}
