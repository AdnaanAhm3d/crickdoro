import React from 'react'

const HowitsPlayed = () => {
  return (
    <>
      <div className='hip-container'>
        <div className='hip-section'>
          <div className='hip-title'>
            <h1 className='hip'>
              An Online Cricket Themed Pomodoro App <br />
              To Help You Focus
            </h1>
            <hr className='hip-line' />
          </div>
          <div className='section-1'>
            <h2>What is Crickdoro?</h2>
            <hr className='hip-line' />
            <p>
              A cricket infused pomodoro game created to help you focus on your
              work or studies.
            </p>
          </div>
          <div className='section-2'>
            <h2>How to Play?</h2>
            <hr className='hip-line' />

            <ul>
              <li>If you picked Bat..</li>
              <p>
                you'll be directed to a page where you can score as many
                sessions as you can, set your own timer and break, basically
                you're in control, you're the Sachin Tendulkar of this moment.
              </p>
              <li>If you picked Ball..</li>
              <p>
                You'll be directed to a page where you'll be able to choose the
                difficulty, set a target of how many sessions you want to do and
                <b> chase them.</b>
              </p>
            </ul>
          </div>

          <div className='section-3'></div>
          <p className='footer'>( all rights reserved.)</p>
        </div>
      </div>
    </>
  )
}

export default HowitsPlayed
