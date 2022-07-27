import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import axios from 'axios';

import image1 from "../imgs/zap1.png";
import image2 from "../imgs/zap2.jfif";
import image3 from "../imgs/zap3.jfif";
import image4 from "../imgs/Zap4.jfif";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";


import { v4 as uuid } from "uuid";

function ListImg() {


  const addCarrito = event => {
    let clicked =event.currentTarget.id
    console.log(clicked)
    let newModEst={
    }
    if(clicked==0){

      let newMod0= {

        id: uuid(),
        price: 400,
        modelo: "Modelo1",
        marca: "Adidas",
        color: "Tricolor",
        numero: 21
      }
      newModEst=newMod0
    }
    if(clicked==1){
      let newMod1 = {
        id: uuid(),
        price: 250,
        modelo: "Modelo2",
        marca: "BubbleGum",
        color: "Rojos",
        numero: 12
      }
      newModEst=newMod1
    }
    if(clicked==2){
      let newMod2 = {
        id: uuid(),
        price: 300,
        modelo: "Modelo3",
        marca: "Ferragamo",
        color: "Cafe",
        numero: 24
      }
      newModEst=newMod2
    }
    if(clicked==3){
      let newMod3 = {

        id: uuid(),
        price: 200,
        modelo: "Modelo4",
        marca: "Flexy",
        color: "Azul",
        numero: 25
      }
      newModEst=newMod3
    }

    
    axios.post("http://localhost:5000/api/carrito",newModEst)
    .then((response)=>{
        console.log(response)
  
    })
    .catch((error)=>{
        console.error(error.response)
    })

  };
  let idd=0


  return (
    <ImageList sx={{ width: 500, height: 720 }}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img 
            
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            
          />
          <ImageListItemBar
            title={item.title}
            subtitle={
                       <span>by: {item.author}
                       </span>
                     }
            
            position="below"
          />
          <p className="">Precio: ${item.price}</p>
          <button
            id={`${idd}`}
            className="btn btn-primary"
            onClick={addCarrito}
           >
            Add To Car 
          </button>
          {idd++}
          
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default ListImg



const itemData = [
  {
    img: image1,
    price: 400,
    title: 'Modelo1',
    author: 'CalvinKlein',
  },
  {
    img: image2,
    price: 250,
    title: 'Modelo2',
    author: 'RY',
  },
  {
    img: image3,
    price: 300,
    title: 'Modelo3',
    author: 'MK',
  },
  {
    img: image4,
    price: 200,
    title: 'Modelo4',
    author: 'Flexy',
  }
];

