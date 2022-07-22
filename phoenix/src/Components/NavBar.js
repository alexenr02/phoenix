<<<<<<< Updated upstream
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="/">Phoenix</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Productos<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="/">Carrito</a>
=======

import {React, useState} from 'react'

function NavBar() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} >
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
    <p className="navbar-brand" >Phoenix</p>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link" href="/">Principal</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="/Productos">Productos</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link " href="/carrito">Carrito</a>
>>>>>>> Stashed changes
      </li>
    </ul>
  </div>
</nav>

  )
}

export default NavBar