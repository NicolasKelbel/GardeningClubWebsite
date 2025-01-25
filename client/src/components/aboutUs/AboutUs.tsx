import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className='aboutUs__column'>
            <h1 className='aboutUs__title'>About Us</h1>
            <div className='aboutUs__item'>
              <div className='aboutUs__textOutsideContainer'>
                <div className='aboutUs__textInsideContainer'>
                  <p className='aboutUs__text'>fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf</p>
                </div>
              </div>
              <div className='aboutUs__horizontalLine'></div>
            </div>
            <div className='aboutUs__item'>
              <div className='aboutUs__textOutsideContainer'>
                <div className='aboutUs__textInsideContainer'>
                  <p className='aboutUs__text'>fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf</p>
                </div>
              </div>
              <div className='aboutUs__horizontalLine'></div>
            </div>
        </div>
        <div className='aboutUs__verticalLine'>
        </div>
        <div className='aboutUs__column'>
          <div className='aboutUs__itemRight aboutUs__item' id='aboutUs__firstRight'>
              <div className='aboutUs__horizontalLine'></div>
              <div className='aboutUs__textOutsideContainer'>
                <div className='aboutUs__textInsideContainer'>
                  <p className='aboutUs__text'>fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf</p>
                </div>
              </div>
            </div>
            <div className='aboutUs__itemRight aboutUs__item'>
              <div className='aboutUs__horizontalLine'></div>
              <div className='aboutUs__textOutsideContainer'>
                <div className='aboutUs__textInsideContainer'>
                  <p className='aboutUs__text'>fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf fkjdslajfkldjsaökf</p>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs