import { useState, createContext, useRef } from 'react'
import { Howl, Howler } from 'howler'
import Sound from '../Audio/soundA.wav'
import Selectionsound from '../Audio/soundB.wav'
import setSound from '../Audio/selectionsound.mp3'
import successSound from '../Audio/success.mp3'

export const DefaultContext = createContext()

function DefaultContextProvider(props) {
  const [dummy, doofus] = useState('hello')
  const [toss, setToss] = useState('true')
  const [bat, setBat] = useState('false')
  const [ball, setBall] = useState('false')
  const [seconds, setSeconds] = useState(0)
  const [minute, setMinute] = useState(25)
  const [sessions, addSessions] = useState(5)
  const [settings, setSettings] = useState(true)
  const [easy, setEasy] = useState(false)
  const [medium, setMedium] = useState(false)
  const [hard, setHard] = useState(false)
  const [active, setActive] = useState(false)
  const [isHovering, setisHovering] = useState(false)
  const [recommended, setRecommended] = useState(true)
  const [split, setSplit] = useState(false)
  const [target, setTarget] = useState(true)
  const [targetValue, setTargetValue] = useState(3)
  const [activeClass, setactiveClass] = useState(true)
  const [TSpomodoro, setTSpomodoro] = useState(25)
  const [TSshortBreak, setTSshortBreak] = useState(5)
  const [TSlongBreak, setTSlongBreak] = useState(15)
  const [value, setValue] = useState(25)
  const [lbsettings, setlbsettings] = useState(false)
  const [showSettings, setshowSettings] = useState(false)
  const [acpomodoro, setAcpomodoro] = useState(true)
  const [acshortbreak, setAcshortbreak] = useState(false)
  const [aclongbreak, setAclongbreak] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [runs, addRuns] = useState(0)
  const [chase, setChase] = useState(true)
  // modal ui handles how the background works when the settings is open.
  const [modalui, setModalui] = useState(false)
  const increment = useRef(null)

  // setToss(true)
  // setBat(false)
  // setBall(false)
  // setSeconds(0)
  // setMinute(25)
  // setSettings(true)
  // setEasy(false)
  // setMedium(false)
  // setHard(false)
  // setActive(false)
  // setisHovering(false)
  // setSplit(false)
  // setTarget(true)
  // setTargetValue(3)
  // setactiveClass(true)
  // setTSpomodoro(25)
  // setTSshortBreak(5)
  // setTSlongBreak(15)
  // setlbsettings(false)
  // setshowSettings(false)
  // setAcpomodoro(true)
  // setAcshortbreak(false)
  // setAclongbreak(false)
  // setScroll(false)
  // addRuns(0)
  // setChase(true)

  // const shortBreak = (minute) => {
  //   clearInterval(increment.current)
  //   setMinute(minute)
  // }

  var setsound = new Howl({
    volume: 0.5,
    src: setSound,
  })

  var sound = new Howl({
    volume: 1,
    src: Sound,
  })

  var sound1 = new Howl({
    volume: 1,
    src: Sound,
  })

  var selectionSound = new Howl({
    volume: 0.5,
    src: Selectionsound,
  })

  var success = new Howl({
    volume: 0.8,
    src: successSound,
  })

  return (
    <DefaultContext.Provider
      value={{
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
        success,
      }}
    >
      {props.children}
    </DefaultContext.Provider>
  )
}
export default DefaultContextProvider
