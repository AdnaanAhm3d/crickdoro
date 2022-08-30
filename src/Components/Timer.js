import React, { useState, useContext, useEffect, useRef } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import { ReactComponent as ResetIcon } from '../images/reset-icon.svg'
import { ReactComponent as ForwardIcon } from '../images/forward-icon.svg'

const Timer = () => {
  const {
    seconds,
    setSeconds,
    minute,
    setMinute,
    increment,
    sessions,
    addSessions,
    settings,
    setSettings,
    setEasy,
    setMedium,
    setHard,
    setActive,
    active,
    isHovering,
    setisHovering,
    split,
    setSplit,
    target,
    setTarget,
    targetValue,
    setTargetValue,
    TSpomodoro,
    setTSpomodoro,
    TSshortBreak,
    setTSshortBreak,
    TSlongBreak,
    setTSlongBreak,
    changeSettings,
    lbsettings,
    setlbsettings,
    acpomodoro,
    setAcpomodoro,
    acshortbreak,
    setAcshortbreak,
    aclongbreak,
    setAclongbreak,
    modalui,
    setModalui,
    sound,
    sound1,
    success,
  } = useContext(DefaultContext)

  const pomodoro = (minute, seconds) => {
    clearInterval(increment.current)
    if (seconds <= 0) {
      setMinute(minute - 1)
    }
    if (seconds <= 0) {
      setSeconds(59)
    }
    setMinute(minute)
    setSeconds(seconds)
    setActive(false)
    setSplit(false)
    setlbsettings(false)
    // set active class

    setAcpomodoro(true)
    setAcshortbreak(false)
    setAclongbreak(false)
  }
  // clearInterval(increment.current)

  const shortBreak = (param) => {
    clearInterval(increment.current)
    setMinute(TSshortBreak)
    setSeconds(0)
    setActive(false)
    setlbsettings(false)
    setSplit(true)
    // set active class

    setAcpomodoro(false)
    setAcshortbreak(true)
    setAclongbreak(false)
  }
  const longBreak = (param) => {
    clearInterval(increment.current)
    setMinute(TSlongBreak)
    setSeconds(0)
    setActive(false)
    setlbsettings(true)
    setSplit(true)
    // set active class
    setAcpomodoro(false)
    setAcshortbreak(false)
    setAclongbreak(true)
  }
  var timerVar

  // handle 00s + completion
  if (seconds <= 0 && active === true) {
    if (seconds <= 0) {
      setMinute(minute - 1)
    }
    if (seconds <= 0) {
      setSeconds(59)
    }
    // When Pomodoro is active
    if (seconds === 0 && minute === 0 && split === false && sessions !== 3) {
      setActive(false)
      addSessions((sessions) => sessions + 1)
      setSeconds(0)
      setMinute(TSshortBreak)
      setSplit(true)
      clearInterval(increment.current)
      setAcpomodoro(false)
      setAcshortbreak(true)
      setAclongbreak(false)
      success.play()
    }

    // When Pomodoro has been on 3 sessions on a trot and you want a long break.
    if (seconds === 0 && minute === 0 && split === false && sessions === 3) {
      setActive(false)
      addSessions((sessions) => sessions + 1)
      setSeconds(0)
      setMinute(TSlongBreak)
      setSplit(true)
      clearInterval(increment.current)
      setAcpomodoro(false)
      setAcshortbreak(false)
      setAclongbreak(true)
      success.play()
    }

    // When Short Break is active
    if (seconds === 0 && minute === 0 && split === true) {
      setActive(false)
      // addSessions((sessions) => sessions + 1)
      setSeconds(0)
      setMinute(TSpomodoro)
      setSplit(false)
      setAcpomodoro(true)
      setAcshortbreak(false)
      setAclongbreak(false)
      success.play()

      clearInterval(increment.current)
    }
  }

  // handle Start
  const playTimer = () => {
    clearInterval(increment.current)
    setActive(true)
    // setSplit()
    sound.play()
    // success.play()
    increment.current = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)
  }

  // handleStop
  const stopTimer = () => {
    setActive(false)
    sound1.play()

    clearInterval(increment.current)
  }

  // handle Reset
  const resetTimer = () => {
    clearInterval(increment.current)
    setSeconds(0)
    setMinute(TSpomodoro)
    if (split && aclongbreak) {
      setMinute(TSlongBreak)
      setAcshortbreak(false)
      setAcpomodoro(false)
    }

    if (split && acshortbreak) {
      setMinute(TSshortBreak)
      setAclongbreak(false)
      setAcpomodoro(false)
    }

    if (split === false) {
      setMinute(TSpomodoro)

      setAcpomodoro(true)
      setAcshortbreak(false)
      setAclongbreak(false)
    }
    setActive(false)
  }

  // const handleSettings = () => {
  //   setSettings(true)
  //   setEasy(false)
  //   setMedium(false)
  //   setHard(false)
  // }

  let text = 'START'
  const setButton = () => {
    if (modalui === false) {
      if (active === false) {
        text = 'START'
      } else {
        text = 'PAUSE'
      }
    }
    return `${text}`
  }

  const pureButton = () => {
    if (modalui === false)
      if (text === 'START') {
        playTimer()
      }
    if (text === 'PAUSE') {
      stopTimer()
    }
  }

  const forwardFunc = () => {
    if (modalui === false) {
      setActive(false)
      clearInterval(increment.current)
      // Handles When Break is On

      if (split === false) {
        setMinute(TSshortBreak)
        setSeconds(0)
        setAcpomodoro(false)
        // setAclongbreak(false)
        setAcshortbreak(true)
        setSplit(true)
      }
      if (split === true) {
        // Handles When Break Pomo is On
        setMinute(TSpomodoro)
        setAclongbreak(false)

        setAcpomodoro(true)
        setAcshortbreak(false)
        setSplit(false)

        setSeconds(0)
      }
    }
  }

  //  acpomodoro,
  //   setAcpomodoro,
  //   acshortbreak,
  //   setAcshortbreak,
  //   aclongbreak,
  //   setAclongbreak,
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
    <>
      <main className='timer-article'>
        <div className='selection-section'>
          <button
            className={`selection ${
              acpomodoro === true ? 'active-selection' : ''
            }`}
            onClick={() => pomodoro(TSpomodoro, 0)}
          >
            Pomodoro
          </button>
          <button
            className={`selection ${
              acshortbreak === true ? 'active-selection' : ''
            }`}
            onClick={() => shortBreak()}
          >
            Short Break
          </button>
          <button
            className={`selection ${
              aclongbreak === true ? 'active-selection' : ''
            }`}
            onClick={() => longBreak(TSlongBreak)}
          >
            Long Break
          </button>
        </div>
        <div className='timer-section'>
          <h2 className='timer'>
            {minute < 10 ? '0' + minute : minute}:
            {seconds < 10 ? '0' + seconds : seconds}
          </h2>
        </div>

        <div className='button-section'>
          <ResetIcon
            className={`reset-icon ${modalui === false ? 'pointer' : ''}`}
            onClick={resetTimer}
          />
          <button
            className={`btn-1 ${modalui === false ? 'btn-1-pointer' : ''}`}
            onClick={pureButton}
          >
            {setButton()}
          </button>
          <ForwardIcon
            className={`forward-icon ${modalui === false ? 'pointer' : ''}`}
            onClick={forwardFunc}
          />
        </div>
        <div className='score-section'>
          <p className='score-class'> {`Score: ${sessions}`}</p>
        </div>
      </main>
      <p className='quote-class'>Stay Focused On The Task!</p>
    </>
  )
}

export default Timer
