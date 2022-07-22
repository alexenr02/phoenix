import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import image1 from "../imgs/zap1.png";
import image2 from "../imgs/zap2.jfif";
import image3 from "../imgs/zap3.jfif";
import image4 from "../imgs/Zap4.jfif";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 500, height: 700 }}>
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
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
          <button
            id="add-btn"
            className="btn btn-primary"
           >
            Add To Car
          </button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: image1,
    title: 'Modelo1',
    author: 'CalvinKlein',
  },
  {
    img: image2,
    title: 'Modelo2',
    author: 'RY',
  },
  {
    img: image3,
    title: 'Modelo3',
    author: 'MK',
  },
  {
    img: image4,
    title: 'Modelo4',
    author: 'Flexy',
  }
];