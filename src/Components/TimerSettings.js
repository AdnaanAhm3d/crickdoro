import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useContext } from 'react'

import { DefaultContext } from '../Context/DefaultContext'

const TimerSettings = () => {
  const {
    pomodoro,
    shortBreak,
    longBreak,
    TSpomodoro,
    setTSpomodoro,
    TSshortBreak,
    setTSshortBreak,
    TSlongBreak,
    setTSlongBreak,
    split,
    setMinute,
    lbsettings,
    setlbsettings,
    showSettings,
    setshowSettings,
    acpomodoro,
    setAcpomodoro,
    acshortbreak,
    setAcshortbreak,
    aclongbreak,
    setAclongbreak,
    modalui,
    setModalui,
    setSeconds,
    sound,
    setsound,
  } = useContext(DefaultContext)

  const changeSettings = (e) => {
    e.preventDefault()
    if (split === true) {
      setMinute(TSshortBreak)
    }
    if (split === false) {
      setMinute(TSpomodoro)
    }
    if (split === true && lbsettings === true) {
      setMinute(TSlongBreak)
    }
    setshowSettings(false)
    setModalui(false)
    setsound.play()
  }

  function useKey(key, cb) {
    const callbackRef = useRef(cb)
    useEffect(() => {
      callbackRef.current = cb
    })

    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event)
        }
      }
      document.addEventListener('keypress', handle)
      return () => document.removeEventListener('keypress', handle)
    }, [key])
  }

  const handleEnter = (e) => {
    sound.play()
    e.preventDefault()
    if (split === true) {
      setMinute(TSshortBreak)
    }
    if (split === false) {
      setMinute(TSpomodoro)
    }
    if (split === true && lbsettings === true) {
      setMinute(TSlongBreak)
    }
    setshowSettings(false)
    setModalui(false)
    setSeconds(0)
    setsound.play()
  }

  useKey('Enter', handleEnter)

  // useKey('Escape', handleEscape)

  return (
    <>
      <div className='timer-settings'>
        <div className='TS-section'>
          <div className='TS-title'>Timer Settings</div>
          <hr />
        </div>

        <div className='TS-button-section' onSubmit={changeSettings}>
          <div className='TS-pomodoro-form '>
            <h4 className='TS-name'>Pomodoro</h4>
            <input
              className='TS-input'
              type='number'
              value={TSpomodoro}
              onChange={(e) => setTSpomodoro(e.target.value)}
            />
          </div>
          <div className='TS-shortbreak-form'>
            <h4 className='TS-name'>Short Break</h4>
            <input
              className='TS-input'
              type='number'
              value={TSshortBreak}
              onChange={(e) => setTSshortBreak(e.target.value)}
            />
          </div>
          <div className='TS-longbreak-form'>
            <h4 className='TS-name'>Long Break</h4>
            <input
              className='TS-input'
              type='number'
              value={TSlongBreak}
              onChange={(e) => setTSlongBreak(e.target.value)}
            />
          </div>
        </div>

        <div className='TS-submit-section'>
          <button className='submit-btn' onClick={changeSettings}>
            Change
          </button>
        </div>
      </div>
    </>
  )
}

export default TimerSettings
