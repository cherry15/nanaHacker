import React from 'react'
import { motion } from 'framer-motion'
import './code.css'

export const Code = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{duration: .2}}
    >
      <div className="page code">
        <h1>Code</h1>
      </div>
    </motion.div>
  )
}