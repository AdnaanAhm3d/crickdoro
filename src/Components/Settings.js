import React, { useContext, useState } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import { ReactComponent as EasyIcon } from '../images/difficulty-1.svg'
import { ReactComponent as MediumIcon } from '../images/difficulty-2.svg'
import { ReactComponent as HardIcon } from '../images/difficulty-3.svg'
import { ReactComponent as Background } from '../images/background-1.svg'
const Settings = () => {
  const {
    setSeconds,
    setMinute,
    setSettings,
    increment,
    setEasy,
    setMedium,
    setHard,
    seconds,
    active,
    setActive,
    minute,
    isHovering,
    setisHovering,
    setModalui,
    selectionSound,
  } = useContext(DefaultContext)

  const handleEasy = () => {
    setSettings(false)
    setEasy(true)
    setSeconds(0)
    setMinute(25)
    setActive(false)
    setModalui(true)
    selectionSound.play()
    clearInterval(increment.current)
  }

  const handleMid = () => {
    setSettings(false)
    setMedium(true)
    setMinute(45)
    setSeconds(0)
    setActive(false)
    setModalui(true)
    selectionSound.play()

    clearInterval(increment.current)
  }

  const handleHard = () => {
    setSettings(false)
    setHard(true)
    setMinute(50)
    setSeconds(0)
    setActive(false)
    setModalui(true)
    selectionSound.play()

    clearInterval(increment.current)
  }

  let recommended = 'recommended-class'

  const cssEasy = () => {
    if (isHovering) {
      recommended = ``
    }
    return `difficulty-article easy-article`
  }
  const cssMed = () => {
    if (isHovering) {
      recommended = ``
    }
    return `difficulty-article medium-article`
  }
  const cssHard = () => {
    if (isHovering) {
      recommended = ``
    }
    return `difficulty-article hard-article`
  }

  return (
    <>
      {/* <Background className='background' /> */}
      <div className='difficulty-section'>
        <article
          className={cssEasy()}
          onMouseEnter={() => setisHovering(true)}
          onMouseLeave={() => setisHovering(false)}
          onClick={() => handleEasy()}
        >
          {/* Difficulty Article */}
          <EasyIcon className='difficulty-logo' />
          <h3 className='difficulty-info'>25 - 5</h3>
          <button className='difficulty-btn'>Easy</button>
        </article>

        {/* Difficulty Article */}

        <article
          className={`${cssMed()} ${recommended}`}
          onMouseEnter={() => setisHovering(true)}
          onMouseLeave={() => setisHovering(false)}
          onClick={() => handleMid()}
        >
          <MediumIcon className='difficulty-logo' />
          <h3 className='difficulty-info'>45 - 15</h3>
          <button className='difficulty-btn'>Medium</button>
        </article>

        {/* Difficulty Article */}
        <article
          className={cssHard()}
          onMouseEnter={() => setisHovering(true)}
          onMouseLeave={() => setisHovering(false)}
          onClick={() => handleHard()}
        >
          <HardIcon className='difficulty-logo' />
          <h3 className='difficulty-info'>50 - 10</h3>
          <button className='difficulty-btn'>Hard</button>
        </article>
      </div>
    </>
  )
}

export default Settings
