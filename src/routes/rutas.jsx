import Home from "../views/Home";
import Inicio from "../views/Inicio";
import Carrito from "../components/Carrito";


export let rutas = [
    {
    path: "/",
    element: <Home />,
    
    },
    {
        path: "/Inicio",
        element: <Inicio />,
    },
    {
        path: "/carrito",
        element: <Carrito />,
    },
]