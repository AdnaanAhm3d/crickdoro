import React, { useContext } from 'react'
import { Bat } from './Bat'
import { Ball } from './Ball'
import { DefaultContext } from '../Context/DefaultContext'
import { ReactComponent as BatIcon } from '../images/bat-svg.svg'
import { ReactComponent as BallIcon } from '../images/ballicon.svg'
export const Toss = () => {
  const {
    setBall,
    setBat,
    setToss,
    addSessions,
    selectionSound,
    sound,
    sound1,
  } = useContext(DefaultContext)

  const handleBatoption = () => {
    setBat(true)
    setToss(false)
    addSessions(0)
    // sound1.play()
    selectionSound.play()
  }
  const handleBalloption = () => {
    setBall(true)
    setToss(false)
    addSessions(1)
    // sound.play()

    selectionSound.play()
  }

  return (
    <div className='toss-section'>
      <div className='toss-title'>
        <h2>Choose a Method</h2>
        <hr className='hr' />
      </div>
      <div className='toss-article-container'>
        <div className='bat-container'>
          <div className='toss-article-bat' onClick={handleBatoption}>
            <h3 className='bat-title'>bat</h3>
            <BatIcon className='bat-icon' />
          </div>
          <h4 className='toss-info-text'>Set A Target</h4>
        </div>
        <h3 className='or'>or</h3>
        <div className='ball-container'>
          <div className='toss-article-ball' onClick={handleBalloption}>
            <h3 className='ball-title'>ball</h3>
            <BallIcon className='ball-icon' />
          </div>
          <h4 className='toss-info-text'>Chase A Target</h4>
        </div>
      </div>
    </div>
  )
}
