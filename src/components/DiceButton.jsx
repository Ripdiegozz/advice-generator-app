import React from 'react'
import getNewAdvice from '../services/generateAdvice'

const handleClick = () => getNewAdvice()

function DiceButton() {
  return (
    <button className='hover:drop-shadow-[0_0_2em_#44eb7bcc] transition-all mt-4 mb-4 bg-[#53ffab] p-[1.25rem] rounded-full relative top-[-3rem]' onClick={handleClick} id="dice-button"><img src="/icon-dice.svg" alt="dice" className='w-[100%] h-[100%] mx-auto'/></button>
  )
}

export default DiceButton