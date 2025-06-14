import React from 'react'
import './aboutUs.css'

type Item = {
  text: string; 
};

type items = {
  items: Item[]; 
};

const AboutUs = ({items}:items) => {

  const leftItems = items.filter((_, index) => index % 2 === 0);
  const rightItems = items.filter((_, index) => index % 2 !== 0);

  return (
    <div className='aboutUs'>
        <div className='aboutUs__column'>
          <div className='aboutUs__titleAndLine'>
            <div className='aboutUs__horizontalLineWhiteLeft'></div>
              <h1 className='aboutUs__title'>ABOUT US</h1>
            <div className='aboutUs__horizontalLineWhiteLeft'></div>
          </div>
            {leftItems.map((item, index) => (
              <div key={index} className='aboutUs__item'>
                <div className='aboutUs__textOutsideContainer'>
                  <div className='aboutUs__textInsideContainer'>
                    <p className='aboutUs__text'>{item.text}</p>
                  </div>
                </div>
                <div className='aboutUs__horizontalLine'></div>
              </div>
            ))}
        </div>
        <div className='aboutUs__verticalLineGreen'></div>
        <div className='aboutUs__column'>
          <div className='aboutUs__horizontalLineWhiteContainer'>
            <div className='aboutUs__horizontalLineWhiteRight'></div>
          </div>
          {rightItems.map((item, index) => (
                <div key={index} className='aboutUs__itemRight aboutUs__item' id={index === 0 ? 'aboutUs__firstRight' : ''}>
                  <div className='aboutUs__horizontalLine'></div>
                  <div className='aboutUs__textOutsideContainer' >
                    <div className='aboutUs__textInsideContainer'>
                      <p className='aboutUs__text'>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
        </div>

    </div>
  )
}

export default AboutUs