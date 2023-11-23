import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav>
            hola
            <Link to={"/"}>Home</Link>
            <Link to={"/Inicio"}>Inicio</Link>
        </nav>
    </div>
  )
}

export default Header