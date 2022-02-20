import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { quotes } from './quotes-data'
import './scroller.css'

interface ScrollerStyles {
  width: number
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Scroller = () => {
  const getMaxWidth = (): number => {
    const max = 667
    if (window.screen.availWidth <= max) {
      return window.screen.availWidth - offsetWidth
    } else {
      return max
    }
  }
  const offsetWidth = 40
  const [[page, direction], setPage] = useState([0, 0])
  const [maxWidth, setMaxWidth] = useState(getMaxWidth())
  const styles: ScrollerStyles = {
    width: maxWidth,
  }
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? maxWidth : -maxWidth,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? maxWidth : -maxWidth,
        opacity: 0,
      }
    },
  }

  window.onresize = () => {
    setMaxWidth(getMaxWidth())
  }
  const quoteIndex = wrap(0, quotes.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="scroller-button-container">
        <button
          className="next"
          onClick={() => paginate(1)}
          aria-label="Next"
        />
        <button
          className="prev"
          onClick={() => paginate(-1)}
          aria-label="Previous"
        />
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="scroller-container"
          style={styles}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <q>{quotes[quoteIndex].content}</q>
          <p className="citation">
            {quotes[quoteIndex].reference}
          </p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
