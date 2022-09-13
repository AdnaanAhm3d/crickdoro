import { useState, useContext, useEffect, useRef } from 'react'
import { DefaultContext } from './Context/DefaultContext'
import { Navbar } from './Components/Navbar'
import { Toss } from './Components/Toss'
import { Bat } from './Components/Bat'
import { Ball } from './Components/Ball'
import HowitsPlayed from './Components/HowitsPlayed'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  const { dummy, setToss, toss, setBat, setBall, bat, ball } =
    useContext(DefaultContext)
  useEffect(() => {})
  return (
    <>
      <div className='app-css'>
        <Navbar />
        {toss && <Toss />}
        {bat === true && <Bat />}
        {ball === true && <Ball />}
      </div>
      <HowitsPlayed className='hip-css-main' />
    </>
  )
}

export default App
