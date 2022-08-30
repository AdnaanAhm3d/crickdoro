import React, { useContext, useState, useRef, useEffect } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import Easy from './Easy'
import { Navbar } from './Navbar'
import Settings from './Settings'
import Timer from './Timer'
import TimerBall from './TimerBall'

export const Ball = () => {
  const { settings, setSettings, minute, seconds } = useContext(DefaultContext)

  return (
    <>
      <main>
        <div className='ball-main'>
          {settings ? <Settings /> : <TimerBall />}
        </div>
      </main>
    </>
  )
}
