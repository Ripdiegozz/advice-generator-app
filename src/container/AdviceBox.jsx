import AdviceCard from "../components/AdviceCard"
import DiceButton from "../components/DiceButton"
import React from 'react'

function AdviceBox() {
  return (
    <div>
      <div className="text-center w-[100%] mx-auto my-auto rounded-tr-lg rounded-tl-lg lg:max-w-[600px]">
          <AdviceCard/>
          <img src="/pattern-divider-desktop.svg" alt="divisor-desktop" className="w-full bg-[rgba(49,58,73,255)] pb-20 rounded-br-lg rounded-bl-lg min-[320px]:max-md:hidden lg:relative"/>
          <img src="/pattern-divider-mobile.svg" alt="divisor-mobile" className="w-full bg-[rgba(49,58,73,255)] pb-20 rounded-br-lg rounded-bl-lg md:hidden"/>
      </div>
      <DiceButton/>
    </div>
  )
}

export default AdviceBox