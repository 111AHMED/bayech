import React, { useState, useEffect } from 'react'
import styles from '../styles/Countdown.module.css'

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const target = new Date('November 28, 2023 00:00:00')
      const diff = target - now

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / 1000 / 60) % 60)
      const seconds = Math.floor((diff / 1000) % 60)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.countdown}>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-number']}>{countdown.days}</div>
        <div className={styles['countdown-label']}>Days</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-number']}>{countdown.hours}</div>
        <div className={styles['countdown-label']}>Hours</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-number']}>{countdown.minutes}</div>
        <div className={styles['countdown-label']}>Minutes</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-number']}>{countdown.seconds}</div>
        <div className={styles['countdown-label']}>Seconds</div>
      </div>
    </div>
  )
}

export default Countdown
