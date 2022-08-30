import React from 'react'
import { useContext } from 'react'
import { DefaultContext } from '../Context/DefaultContext'
import { Navbar } from './Navbar'

import Timer from './Timer'

export const Bat = () => {
  const { settings } = useContext(DefaultContext)
  return (
    <>
      <Timer />
    </>
  )
}

// export default Bat
