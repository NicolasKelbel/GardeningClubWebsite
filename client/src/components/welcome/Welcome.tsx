import React, { useState } from 'react'
import "./welcomeStyle.css"
import { IoIosArrowDown } from "react-icons/io";

const Welcome = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleScroll = () => {
    console.log("scrollToSection");
    const target = document.querySelector('.placeHolderWithLine');
    if (target) {
      console.log("scrollToSection");
      const targetPosition = target.getBoundingClientRect().top; 
      const startPosition = document.documentElement.scrollTop || document.body.scrollTop; 
      const duration = 1300; 
      let startTime: number | null = null;
  
      const easeInOut = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b; 
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b; 
      };
  
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOut(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      requestAnimationFrame(animation);
    }
  };
  

  return (
    <div className='welcome'>
      <div className='welcome__container'>
        <div className='welcome__titleContainer'>
          <h1 className='welcome__title'>Gardening Club</h1>
        </div>
        <div className='welcome__arrowDownContainer'>
          <div className='welcome__arrowDownSurrounding' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <IoIosArrowDown className='welcome__arrowDownIcon' id= {isHovering ? "welcome_arrowDownSurroundingHovering" : ""} onClick={handleScroll}/>
          </div>
          <div className='welcome__verticalLine'></div>
        </div>
      </div>
    </div>
  )
}

export default Welcome