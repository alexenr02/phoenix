import React from 'react'
import image1 from "../imgs/zap1.png";
import image2 from "../imgs/zap2.jfif";
import image3 from "../imgs/zap3.jfif";
import image4 from "../imgs/Zap4.jfif";
import '../App.css';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function Productos() {
  return (
    <div >
        <p >Poductos</p>
        <div className='ima'>
        <img src={image1} alt=""/>
        <img src={image2} alt=""/>
        <img src={image3} alt=""/>
        <img src={image4} alt=""/>
        </div>
    </div>
  )
}

export default Productos