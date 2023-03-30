import Countdown from 'react-countdown';

import React from 'react'


const Completionist = () => <span>You are good to go!</span>;
const CountDown = () => {
  return (
    <div>
      <Countdown date={Date.now() + 10000} >
        <Completionist/>
      </Countdown>
    </div>
  )
}

export default CountDown