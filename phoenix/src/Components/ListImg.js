import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import axios from 'axios';

//importacion de imagenes
import image1 from "../imgs/zap1.webp";
import image2 from "../imgs/zap2.webp";
import image3 from "../imgs/zap3.webp";
import image4 from "../imgs/zap4.webp";
import image5 from "../imgs/zap5.webp";
import image6 from "../imgs/zap6.webp";
import image7 from "../imgs/zap7.webp";
import image8 from "../imgs/zap8.jpg";




import { v4 as uuid } from "uuid";

function ListImg() {


  useEffect(() => {
    getAllCharacters();
    
   
  }, []);


  const [data, setData] = useState([]);

  const getAllCharacters = () => {
    axios.get("http://localhost:5000/api/carrito").then((response) => {
      console.log(response);
      setData(response.data);
      suma();
      
    });
  };

  function totalProd(){
    return data.length;
    }

  function suma(){
    let tot=0;
  data.map((zapato) => (

    tot=tot+zapato.price
   
  ));
  
  return tot;
 }


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
    if(clicked==4){
      let newMod2 = {
        id: uuid(),
        price: 390,
        modelo: "Modelo5",
        marca: "Nike",
        color: "Cafe",
        numero: 24
      }
      newModEst=newMod2
    }
    if(clicked==5){
      let newMod3 = {

        id: uuid(),
        price: 2000,
        modelo: "Modelo6",
        marca: "NIKE",
        color: "Azul",
        numero: 25
      }
      newModEst=newMod3
    }
    if(clicked==6){
      let newMod2 = {
        id: uuid(),
        price: 750,
        modelo: "Modelo7",
        marca: "PUMA",
        color: "Cafe",
        numero: 24
      }
      newModEst=newMod2
    }
    if(clicked==7){
      let newMod3 = {

        id: uuid(),
        price: 1000,
        modelo: "Modelo8",
        marca: "PUMA",
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

    getAllCharacters();

  };
  let idd=0


  return (

    <div>
     <div className="imglist2">
    <h5 className="header1Prod">Cuenta total = ${suma()}       </h5>
    <h5 className="headerProd">Productos en el carrito = {totalProd()}</h5>
    </div>
    <div className="imglist">
    <ImageList sx={{ width: 600, height: 1800}} cols={2} >
      
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img 
            
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            
            
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
    
    </div>
    
    </div>
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
    price: 1540,
    title: 'Modelo4',
    author: 'Flexy',
  },
  {
    img: image5,
    price: 390,
    title: 'Modelo5',
    author: 'CalvinKlein',
  },
  {
    img: image6,
    price: 2000,
    title: 'Modelo6',
    author: 'RY',
  },
  {
    img: image7,
    price: 750,
    title: 'Modelo7',
    author: 'MK',
  },
  {
    img: image8,
    price: 1000,
    title: 'Modelo8',
    author: 'Flexy',
  }
];

