import {React, useState} from 'react'

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navigationbar">
<a class="navbar-brand" href="/">Phoenix</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className={
          isNavExpanded ? "collapse navbar-collapse expanded" : "collapse navbar-collapse" 
        } id="navbarNav">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a class="nav-link" href="/">Principal</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/productos">Productos<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a class="nav-link" href="/carrito">Carrito</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar