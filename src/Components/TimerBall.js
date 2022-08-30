import React, { useState, useContext, useEffect, useRef } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import Medium from './Medium'
import Easy from './Easy'
import Hard from './Hard'

const TimerBall = () => {
  // const {
  //   seconds,
  //   setSeconds,
  //   minute,
  //   setMinute,
  //   increment,
  //   sessions,
  //   addSessions,
  //   settings,
  //   setSettings,
  //   longTime,
  //   shortBreak,
  // } = useContext(DefaultContext)
  const { easy, medium, hard, minute, seconds } = useContext(DefaultContext)
  // const pomodoro = (minute, seconds) => {
  //   clearInterval(increment.current)
  //   if (seconds <= 0) {
  //     setMinute(minute - 1)
  //   }
  //   if (seconds <= 0) {
  //     setSeconds(59)
  //   }

  //   setMinute(minute)
  //   setSeconds(seconds)
  // }

  // const longerBreak = () => {
  //   clearInterval(increment.current)
  //   setMinute(15)
  //   setSeconds(0)
  // }

  // var timerVar

  // // handle change at the completion
  // if (seconds === 0 && minute === 0) {
  //   addSessions((sessions) => sessions + 1)
  //   setSeconds(0)
  //   setMinute(1)
  //   clearInterval(increment.current)
  // }

  // // handle Start
  // const playTimer = () => {
  //   clearInterval(increment.current)

  //   // handle 00s
  //   if (seconds <= 0) {
  //     setMinute(minute - 1)
  //   }
  //   if (seconds <= 0) {
  //     setSeconds(59)
  //   }

  //   increment.current = setInterval(() => {
  //     setSeconds((seconds) => seconds - 1)
  //   }, 1000)
  // }

  // // handleStop
  // const stopTimer = () => {
  //   clearInterval(increment.current)
  // }
  // // handle Reset
  // const resetTimer = (minute) => {
  //   clearInterval(increment.current)
  //   setSeconds(0)
  //   setMinute(minute)
  // }
  const timerDisplay = (minute, seconds) => {
    let min = ''
    let sec = ''
    if (minute < 10) {
      min = '0' + minute
    } else {
      min = minute
    }
    if (seconds < 10) {
      sec = '0' + seconds
    } else {
      sec = seconds
    }

    return `${min}:${sec} - Time to Focus!`
  }

  document.title = timerDisplay(minute, seconds)
  return (
    <main className='timer'>
      {easy && <Easy className='temp' />}
      {medium && <Medium className='temp' />}
      {hard && <Hard className='temp' />}
    </main>
  )
}

export default TimerBall
