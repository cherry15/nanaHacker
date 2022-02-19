import React from 'react'
import { motion } from 'framer-motion'
import styles from './home.module.css'
import { Scroller } from '../../features/scroller/scroller'

export const Home = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`page ${styles.home}`}>
        <Scroller />
      </div>
    </motion.div>
  )
}
