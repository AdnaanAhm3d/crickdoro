import React, { useContext, useState } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import Logo from './Logo'
import { ReactComponent as InfoIcon } from '../images/info-icon.svg'
import { ReactComponent as LoginIcon } from '../images/login-icon.svg'
import { ReactComponent as SettingsIcon } from '../images/settings-icon.svg'
import { ReactComponent as Mainlogo } from '../images/cricklogo.svg'
import TimerSettings from './TimerSettings'

export const Navbar = () => {
  const {
    dummy,
    setToss,
    toss,
    setBat,
    setBall,
    bat,
    ball,
    seconds,
    setSeconds,
    minute,
    setMinute,
    increment,
    sessions,
    addSessions,
    settings,
    setSettings,
    value,
    setValue,

    easy,
    setEasy,
    medium,
    setMedium,
    hard,
    setHard,
    active,
    setActive,
    isHovering,
    setisHovering,
    split,
    setSplit,
    target,
    setTarget,
    targetValue,
    setTargetValue,
    activeClass,
    setactiveClass,

    TSpomodoro,
    setTSpomodoro,
    TSshortBreak,
    setTSshortBreak,
    TSlongBreak,
    setTSlongBreak,

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
    runs,
    addRuns,

    chase,
    setChase,
    scroll,
    setScroll,
    selectionSound,
    sound,
    sound1,
    setsound,
  } = useContext(DefaultContext)
  // const { setSettings, setEasy, setMedium, setHard } =
  //   useContext(DefaultContext)

  // const handleSettings = () => {
  //   setSettings(true)
  //   setEasy(false)
  //   setMedium(false)
  //   setHard(false)
  // }
  const handleSettingsModal = () => {
    setshowSettings(true)
    setModalui(true)
  }

  const handleSettingsModalBall = () => {
    setTarget(true)
    setModalui(true)
  }

  const homePage = () => {
    if (modalui === false) {
      setToss(true)
      setBat(false)
      setBall(false)
      setSeconds(0)
      setMinute(25)
      setSettings(true)
      setEasy(false)
      setMedium(false)
      setHard(false)
      setActive(false)
      setisHovering(false)
      setSplit(false)
      setTarget(true)
      setTargetValue(3)
      setactiveClass(true)
      setTSpomodoro(25)
      setTSshortBreak(5)
      setTSlongBreak(15)
      setlbsettings(false)
      setshowSettings(false)
      setAcpomodoro(true)
      setAcshortbreak(false)
      setAclongbreak(false)
      setScroll(false)
      addRuns(0)
      setChase(true)
      clearInterval(increment.current)
    }
  }

  const scroller = () => {
    let pageHeight = window.innerHeight
    if (modalui === false) {
      window.scrollBy(0, pageHeight)
    }
  }

  return (
    <>
      <nav className='nav-bar'>
        <div className='info-panel' onClick={scroller}>
          <InfoIcon
            className={`info-icon ${modalui === false && 'home-pointer'}`}
          />
          <h4 className={`info-text ${modalui === false && 'home-pointer'}`}>
            How It's Played
          </h4>
        </div>

        <div className={`logo-panel`}>
          <Mainlogo
            className={`logo ${modalui === false && 'home-pointer'}`}
            onClick={() => homePage()}
          />
        </div>
        <div className='third-nav-panel'>
          {/* {toss === false && <LoginIcon className='login-icon' />} */}
          {toss === false && bat === true && (
            <SettingsIcon
              className='settings-icon'
              onClick={() => handleSettingsModal()}
            />
          )}
          {toss === false && ball === true && (
            <SettingsIcon
              className='settings-icon'
              onClick={() => handleSettingsModalBall()}
            />
          )}
        </div>
      </nav>
      {showSettings && <TimerSettings />}
    </>
  )
}
