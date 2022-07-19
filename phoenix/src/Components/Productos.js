import React from 'react'
import image1 from "../imgs/zap1.png";
import image2 from "../imgs/zap2.jfif";
import image3 from "../imgs/zap3.jfif";
import image4 from "../imgs/Zap4.jfif";



function Productos() {
  return (
    <div>
        <p>Poductos</p>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
    </div>
  )
}

export default Productos