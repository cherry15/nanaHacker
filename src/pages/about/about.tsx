import React from 'react'
import { motion } from 'framer-motion'
import './about.css'

export const About = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`page about`}>
        <h1>About</h1>
      </div>
    </motion.div>
  )
}
