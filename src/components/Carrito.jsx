import { Link } from "react-router-dom"
import Menu from "./Menu"
function Carrito() {
  
  return (
    <div>
      <div className="wrapper">
      <header className="header-mobile">
        <h1 className="logo">Xclusive</h1>
        <button className="open-menu" id="open-menu">
          <i className="bi bi-list"></i>
        </button>
      </header>
      <aside>
        <button className="close-menu" id="close-menu">
          <i className="bi bi-x"></i>
        </button>
        <header>
          <h1 className="logo">Xclusive</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to={"/Inicio"} className="boton-menu boton-volver" >
                <i className="bi bi-arrow-return-left"></i> Seguir comprando
              </Link>
            </li>
            <li>
              <Link to={"/carrito"} className="boton-menu boton-carrito active" >
                <i className="bi bi-cart-fill"></i> Carrito
              </Link>
            </li>
          </ul>
        </nav>
        <footer>
          <p className="texto-footer">© 2023 Xclusive</p>
        </footer>
      </aside>
      <main>
        <h2 className="titulo-principal">Carrito</h2>
        <div className="contenedor-carrito">
          <p id="carrito-vacio" className="carrito-vacio">
            Tu carrito está vacío. <i className="bi bi-emoji-frown"></i>
          </p>

          <div id="carrito-productos" className="carrito-productos disabled">
            {/* This will be filled with React components */}
          </div>

          <div id="carrito-acciones" className="carrito-acciones disabled">
            <div className="carrito-acciones-izquierda">
              <button id="carrito-acciones-vaciar" className="carrito-acciones-vaciar">
                Vaciar carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Total:</p>
                <p id="total">$3000</p>
              </div>
              <button id="carrito-acciones-comprar" className="carrito-acciones-comprar">
                Comprar ahora
              </button>
            </div>
          </div>

          <p id="carrito-comprado" className="carrito-comprado disabled">
            Muchas gracias por tu compra. <i className="bi bi-emoji-laughing"></i>
          </p>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Carrito
