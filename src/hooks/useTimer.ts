import { useState, useMemo, useEffect } from 'react'

type TimerType = {
  milliseconds: number
  seconds: number
  minutes: number
  hours: number
  secondsText: string
  minutesText: string
  hoursText: string
  onStartTimer: () => void
  onStopTimer: () => void
  onPauseTimer: () => void
}

export default (startTimerOnRender = false, initialTime = 0): TimerType => {
  const [isTimerRunning, setIsTimerRunning] = useState(startTimerOnRender)
  const [milliseconds, setMilliseconds] = useState(initialTime)

  const onStartTimer = (): void => {
    setIsTimerRunning(true)
  }

  const onPauseTimer = (): void => {
    setIsTimerRunning(false)
  }

  const onStopTimer = (): void => {
    setIsTimerRunning(false)
    setMilliseconds(0)
  }

  useEffect(() => {
    let timer: number | null = null

    if (isTimerRunning) {
      timer = setInterval(() => {
        setMilliseconds(milliseconds + 100)
      }, 100)
    }

    return (): void => {
      if (timer) clearInterval(timer)
    }
  }, [isTimerRunning, milliseconds])

  const { seconds, minutes, hours } = useMemo<{
    seconds: number
    minutes: number
    hours: number
  }>(() => {
    const secondsValue = milliseconds / 1000
    const minutesValue = secondsValue / 60
    const hoursValue = minutesValue / 60

    return {
      seconds: secondsValue - Math.floor(minutesValue) * 60,
      minutes: minutesValue - Math.floor(hoursValue) * 60,
      hours: hoursValue,
    }
  }, [milliseconds])

  const onGetNumberText = (number: number): string => {
    const newNumber = Math.floor(number)
    return newNumber < 10 ? `0${newNumber}` : `${newNumber}`
  }

  const secondsText = useMemo(() => onGetNumberText(seconds), [seconds])
  const minutesText = useMemo(() => onGetNumberText(minutes), [minutes])
  const hoursText = useMemo(() => onGetNumberText(hours), [hours])

  return {
    milliseconds,
    seconds,
    minutes,
    hours,
    secondsText,
    minutesText,
    hoursText,
    onStartTimer,
    onStopTimer,
    onPauseTimer,
  }
}
