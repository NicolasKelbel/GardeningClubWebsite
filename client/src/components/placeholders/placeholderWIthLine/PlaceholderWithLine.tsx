import React from 'react'
import "./placeHolderWithLine.css"

type Height = {
  height: React.CSSProperties['height'];
};

const PlaceHolderWithLine = ({height}:Height) => {
  return (
    <div className='placeHolderWithLine' style={{height: height}}>
        <div className='placeHolderWithLine__verticalLine'></div>
    </div>
  )
}

export default PlaceHolderWithLine