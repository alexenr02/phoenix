import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";



//importacion de imagenes
import image1 from "../imgs/zap1.webp";
import image2 from "../imgs/zap2.webp";
import image3 from "../imgs/zap3.webp";
import image4 from "../imgs/zap4.webp";
import image5 from "../imgs/zap5.webp";
import image6 from "../imgs/zap6.webp";
import image7 from "../imgs/zap7.webp";
import image8 from "../imgs/zap8.jpg";



function ListImg() {


  return (

    <div>

    <div className="imglist">
    <ImageList variant="masonry" cols={3} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
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

