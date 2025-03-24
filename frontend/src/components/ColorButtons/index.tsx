import { Props } from "./ColorButtonsTypes"
import './ColorButtons.css'

import { gsap } from "gsap"
import { useEffect } from "react"

const ColorButtons = ({ Sequence }: Props) => {

  useEffect(() => {
    gsap.fromTo(".Buttons", {
      
      ease: "power1.inOut",
      scale: 1.1,
      opacity:0.5
      },
      {
        duration: 0.5,
        scale: 1,
        opacity:1,
      }
    )
  },[])
 
  const triggerAnimation = (color:string) => {
    gsap.fromTo(color, {
      
      ease: "power1.inOut",
      scale: 1,
      },
      {
        duration: 0.15,
        scale: 1.2,
        yoyo: true,
        repeat: 1
      }
    )
  }

  return (
    <div className="ColorButtons">
      <div className='Buttons'>
        <button className="Red" onClick={() => { Sequence('Red'),triggerAnimation('.Red') }}></button>
        <button className="Yellow" onClick={() => { Sequence('Yellow'), triggerAnimation('.Yellow') }}></button>
      </div>
      <div className='Buttons'>
        <button className="Green" onClick={() => { Sequence('Green'), triggerAnimation('.Green') }}></button>
        <button className="Blue" onClick={() => { Sequence('Blue'), triggerAnimation('.Blue') }}></button>
      </div>
    </div>
  )
}

export default ColorButtons