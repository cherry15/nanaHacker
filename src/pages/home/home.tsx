import React from 'react'
import { motion } from 'framer-motion'
import styles from './home.module.css'

export const Home = () => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2 }}
    >
      <div className={`page ${styles.home}`}>
        <div className={styles.container}>
        <q>
          <i className={`fas fa-quote-left ${styles.quote}`}></i>
          We like to think of our champions and idols as superheroes who were
          born different from us. We don't like to think of them as relatively
          ordinary people who made themselves extraordinary.
          <i
            className={`fas fa-quote-right ${styles.quote} ${styles.endQuote}`}
          ></i>
        </q>
        <p className={styles.citation}>
          Carol Dweck, Mindset: The New Psychology of Success
        </p>
      </div>
      </div>
    </motion.div>
  )
}
