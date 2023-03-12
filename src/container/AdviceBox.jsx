import AdviceCard from "../components/AdviceCard"
import DiceButton from "../components/DiceButton"
import React from 'react'

function AdviceBox() {
  return (
    <div>
      <div className="text-center w-[100%] mx-auto my-auto rounded-tr-lg rounded-tl-lg">
          <AdviceCard/>
          {/* <img src="/pattern-divider-desktop.svg" alt="divisor-desktop" className="w-full"/> */}
          <img src="/pattern-divider-mobile.svg" alt="divisor-mobile" className="w-full bg-[rgba(49,58,73,255)] pb-20 rounded-br-lg rounded-bl-lg"/>
      </div>
      <DiceButton/>
    </div>
  )
}

export default AdviceBox