import { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'

export const Countdown = () => {
  const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000 // 365 días en milisegundos
  const futureDate = new Date(new Date().getTime() + oneYearInMilliseconds)

  const calculateTimeRemaining = () => {
    const currentDate = new Date()
    const timeDifference = futureDate - currentDate

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0 }
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    )
    return { days, hours, minutes }
  }

  const [countdown, setCountdown] = useState(calculateTimeRemaining)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeRemaining)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 32px',
        borderRadius: '8px'
      }}
    >
      <Typography fontSize='14px'>
        {countdown.days}d:{countdown.hours}h:{countdown.minutes}m y 8 cursos
        para graduarme como Ing. Industrial
      </Typography>
    </div>
  )
}
