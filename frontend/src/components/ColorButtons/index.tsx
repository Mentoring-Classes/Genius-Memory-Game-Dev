import { Props } from "./ColorButtonsTypes"
import './ColorButtons.css'

import gsap from "gsap"

const ColorButtons = ({Sequencia}: Props) => {
  return (
    <div className="ColorButtons">
        <div className='Buttons'>
            <button className="Red" onClick={() => { Sequencia('Red') }}></button>
            <button className="Yellow" onClick={() => { Sequencia('Yellow') }}></button>
        </div>
        <div className='Buttons'>
            <button className="Green" onClick={() => { Sequencia('Green') }}></button>
            <button className="Blue" onClick={() => { Sequencia('Blue') }}></button>
        </div>
    </div>
  )
}

export default ColorButtons