import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  Component,
} from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import { ReactComponent as Pitch } from '../images/Pitch.svg'
import { ReactComponent as ResetIcon } from '../images/reset-icon.svg'
import { ReactComponent as ForwardIcon } from '../images/forward-icon.svg'
import { ReactComponent as Xtoggle } from '../images/X.svg'
import { Howl, Howler } from 'howler'

import HowitsPlayed from './HowitsPlayed'
const Easy = () => {
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
    setlbsettings,
    acpomodoro,
    setAcpomodoro,
    acshortbreak,
    setAcshortbreak,
    aclongbreak,
    setAclongbreak,
    modalui,
    TSpomodoro,
    longBreak,
    TSlongBreak,
    runs,
    addRuns,
    chase,
    setChase,
    setModalui,
    selectionSound,
    sound,
    sound1,
    setsound,
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
  }
  // clearInterval(increment.current)

  const shortBreak = () => {
    clearInterval(increment.current)
    setMinute(5)
    setSeconds(0)
    setActive(false)

    setSplit(true)
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

    if (seconds === 0 && minute === 0 && split === false) {
      setActive(false)
      if (sessions > 0) {
        // addSessions((sessions) => sessions - 1)
        addRuns((runs) => runs + 1)
      }

      console.log(runs)
      setSeconds(0)
      setMinute(5)
      setSplit(true)
      clearInterval(increment.current)
      success.play()
    }

    if (seconds === 0 && minute === 0 && split === true) {
      setActive(false)
      // addSessions((sessions) => sessions + 1)
      setSeconds(0)
      setMinute(25)
      setSplit(false)
      success.play()

      clearInterval(increment.current)
    }

    if (sessions === 0) {
    }
  }

  // handle Start
  const playTimer = () => {
    clearInterval(increment.current)
    setActive(true)
    sound.play()
    increment.current = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)
  }

  // handleStop
  const stopTimer = () => {
    setActive(false)
    clearInterval(increment.current)
    sound1.play()
  }

  // handle Reset
  const resetTimer = () => {
    clearInterval(increment.current)
    setSeconds(0)
    // setMinute(25)
    if (split) {
      // setSplit(false)
      setMinute(5)
    } else {
      // setSplit(true)
      setMinute(25)
    }
    setActive(false)
  }

  const handleSettings = () => {
    setSettings(true)
    setEasy(false)
    setMedium(false)
    setHard(false)
  }

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
    setActive(false)
    clearInterval(increment.current)
    // Handles When Break is On
    if (split === false) {
      setSplit(true)
      setMinute(5)
      setSeconds(0)
    }
    if (split === true) {
      // Handles When Break Pomo is On
      setSplit(false)

      setMinute(25)
      setSeconds(0)
    }
  }
  let newTarget = ''
  const setTargetFunc = (e) => {
    addSessions(targetValue)
    newTarget = targetValue
    e.preventDefault()
    setTarget(false)
    setModalui(false)
    setsound.play()

    if (chase === false) {
      setChase(true)
    }
    // setMinute(25)
    // setSeconds(0)
    // clearInterval(increment.current)
  }

  let score = ''
  // const scorecardFunc = () => {
  //   if (sessions > 0) {
  //     score = `Runs: ${sessions}`
  //   } else {
  //     score = `You've Chased the Target!!!!`
  //   }

  const scorecardFunc = () => {
    if (runs == sessions) {
      // setChase(false)
      score = `You've Chased the Target!!!!`
      setChase(false)
    } else {
      score = `Runs: ${runs}`
    }
    return score
  }

  const xtoggler = (e) => {
    e.preventDefault()

    setTarget(false)
    setModalui(false)
    // setsound.play()
  }

  // let taarget = ''
  // const targetFunc = () => {
  //   if (runs === sessions) {
  //     taarget = ''
  //   } else {
  //     taarget = `Target: ${sessions}`
  //   }
  // }
  console.log(runs)
  console.log(sessions)
  return (
    <>
      {target && (
        <div className='target-form'>
          <Xtoggle className='xtoggle' onClick={xtoggler} />
          <div className='form-section'>
            <div className='form'>
              <label className=''>Set Your Target</label>
              <input
                type='number'
                placeholder='Number of Sessions'
                className='input-target'
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
              />
            </div>
            <button className='btn-target' onClick={setTargetFunc}>
              Set
            </button>
          </div>
        </div>
      )}
      <main className='timer-article-ball'>
        <hr className='timer-ball-hr' />

        <div className='timer-section-ball'>
          <p className='quote-class-ball'>Stay Focused On The Task!!</p>
          <h2 className='timer-ball'>
            {minute < 10 ? '0' + minute : minute}:
            {seconds < 10 ? '0' + seconds : seconds}
          </h2>
        </div>

        <div className='button-section-ball'>
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
        <div className='score-section-ball'>
          <div className='score-class-ball'>
            <p className=''>{scorecardFunc()}</p>
            <p>{chase && `Target: ${sessions}`}</p>
          </div>
        </div>
      </main>
      {/* <HowitsPlayed /> */}
    </>
  )
}

export default Easy
