import React from 'react'
import styles from './home.module.css'
import { Scroller } from '../../features/scroller/scroller'

export const Home = () => {
  return (
    <div className={`page ${styles.home}`}>
      <Scroller />
    </div>
  )
}
