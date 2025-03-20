import { Props } from "./ColorButtonsTypes"
import './ColorButtons.css'

import { gsap } from "gsap"

const ColorButtons = ({ Sequencia }: Props) => {
 
  const triggerAnimation = (color:string) => {
    gsap.to(color, {
      duration: 0.3,
      ease: "power1.inOut",
      scale: 1.2,
      yoyo: true,
      repeat: 1
      }
    )
  }

  return (
    <div className="ColorButtons">
      <div className='Buttons'>
        <button className="Red" onClick={() => { Sequencia('Red'),triggerAnimation('.Red') }}></button>
        <button className="Yellow" onClick={() => { Sequencia('Yellow'), triggerAnimation('.Yellow') }}></button>
      </div>
      <div className='Buttons'>
        <button className="Green" onClick={() => { Sequencia('Green'), triggerAnimation('.Green') }}></button>
        <button className="Blue" onClick={() => { Sequencia('Blue'), triggerAnimation('.Blue') }}></button>
      </div>
    </div>
  )
}

export default ColorButtons