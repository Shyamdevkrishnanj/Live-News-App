import React from 'react'
import Marquee from 'react-fast-marquee'

function Slider() {

  const gradientStyle = {
    background: 'linear-gradient(to right, #3498db, #2ecc71)', // Change colors as needed
  };

  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={50} style={gradientStyle} >
        <h1 className="breaking-news text-sm md:text-lg transition-font duration-300 font-bold">
          Breaking News : Get Live Updates Here | Search Your Favorite Categories
        </h1>
      </Marquee>
    </div>
  );
}

export default Slider