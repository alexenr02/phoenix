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
      </li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar