import { Link } from "react-router-dom"
import { useState } from "react";
function Menu() {
    const [isAsideVisible, setAsideVisible] = useState(false);

  const handleOpenMenu = () => {
    setAsideVisible(true);
  };

  const handleCloseMenu = () => {
    setAsideVisible(false);
  };

  return (
    <div>
      <div className="wrapper">
      <header className="header-mobile">
        <h1 className="logo">Xclusive</h1>
        <button className="open-menu" id="open-menu" onClick={handleOpenMenu}>
          <i className="bi bi-list"></i>
        </button>
      </header>
      <aside className={isAsideVisible ? 'aside-visible' : ''}>
        <button className="close-menu" id="close-menu" onClick={handleCloseMenu}>
          <i className="bi bi-x"></i>
        </button>
        <header>
          <h1 className="logo">Xclusive</h1>
        </header>
        <nav>
          <ul className="menu">
            <li>
              <button id="todos" className="boton-menu boton-categoria active">
                <i className="bi bi-hand-index-thumb-fill"></i> Todos los productos
              </button>
            </li>
            <li>
              <button id="abrigos" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Abrigos
              </button>
            </li>
            <li>
              <button id="camisetas" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Camisetas
              </button>
            </li>
            <li>
              <button id="pantalones" className="boton-menu boton-categoria">
                <i className="bi bi-hand-index-thumb"></i> Pantalones
              </button>
            </li>
            <li>
              <Link to={"/carrito"} className="boton-menu boton-carrito">
                <i className="bi bi-cart-fill"></i> Carrito{' '}
                <span id="numerito" className="numerito">
                  0
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <footer>
          <p className="texto-footer">© 2023 Xclusive</p>
        </footer>
      </aside>
      <main>
        <h2 className="titulo-principal" id="titulo-principal">
          Todos los productos
        </h2>
        <div id="contenedor-productos" className="contenedor-productos">
          {/* Esto se va a rellenar con JS */}
        </div>
      </main>
    </div>
    </div>
  )
}

export default Menu
