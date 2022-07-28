import React from 'react'
import mainmedia from "../imgs/mainmedia.png";
import ListImgPrin from "./ListImgPrin"



function Principal() {
  return (
    <div>
      <section id="IniPrincipal">
        <h1> Tienda en Linea</h1>
      <p>Proyecto Final DAW Equipo 9</p>
      </section>
      <img id="mainmedia"src={mainmedia} alt="Promo image"/>

          <h2>Mision</h2>
          <p>Proyecto Final Desarrollo de Aplicaciones Web Verano 2022</p>

          <h2>Vision</h2>
          <p>Creacion de una pagina de tienda en linea navegable donde se puedan agregar productos a un carrito </p>

      <section id="IniPrincipal">
        <h3> Integrantes: </h3>
      <p>Carla Corona Cardoso,José Antonio Hernández Cruz,Luis Alejandro Enríquez Solís</p>
      </section>
      <ListImgPrin></ListImgPrin>
    </div>
  )
}

export default Principal