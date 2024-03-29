

import {React, useState} from 'react'

function NavBar() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} >
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
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
      </li>
      
      <li className="nav-item ">
        <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          
        <input type="password" className="form-control" id="inputPassword2" placeholder="Buscar">
       </input>
        </div>
       </form>
      </li>
      <li className="nav-item ">
      <button type="submit" className="btn btn-primary ">Ir</button>
      </li>
    </ul>

  
  </div>
</nav>
  )
}

export default NavBar