import React, { useState } from 'react'
import "./welcomeStyle.css"
import { IoIosArrowDown } from "react-icons/io";

const Welcome = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className='welcome'>
      <div className='welcome__container'>
        <div className='welcome__titleContainer'>
          <h1 className='welcome__title'>Gardening Club</h1>
        </div>
        <div className='welcome__arrowDownContainer'>
          <div className='welcome__arrowDownSurrounding' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <IoIosArrowDown className='welcome__arrowDownIcon' id= {isHovering ? "welcome_arrowDownSurroundingHovering" : ""}/>
          </div>
          <div className='welcome__verticalLine'></div>
        </div>
      </div>
    </div>
  )
}

export default Welcome