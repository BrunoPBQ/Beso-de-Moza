import React from 'react';
import { Link } from "react-router-dom";
import "../css/navbar.css";
const Navbar = ({ Inicio, CantProductos, CabiarEstadoModal }) => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-navbar shadow-sm">
                <div className='container'>
                    <Link className="navbar-brand" to="/"><img height={45} src="https://cdn.discordapp.com/attachments/866837932643450901/996637938060378172/logo2.png" alt="Logo Beso de Moza" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="div-nav d-flex">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav text-white">
                                <li className="nav-item mr-1 ml-1">
                                    {Inicio ?
                                        <a className="nav-link" href='/#'>Inicio</a >
                                        :
                                        <Link className="nav-link" to="/">Inicio</Link >
                                    }
                                </li>
                                {Inicio ?
                                    <>
                                        <li className="nav-item mr-1 ml-1">
                                            <a className="nav-link" href="#nosotros">Nosotros</a >
                                        </li>
                                        <li className="nav-item mr-1 ml-1">
                                            <a className="nav-link" href="#sabores">Sabores</a >
                                        </li>
                                        <li className="nav-item mr-1 ml-1">
                                            <a className="nav-link" href="#novedades">Novedades</a >
                                        </li>
                                    </>
                                    :
                                    <li className="nav-item dropdown mr-1 ml-1">
                                        <Link className="nav-link" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                                            Sabores <i className="fas fa-caret-down"></i>
                                        </Link >
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <Link className="dropdown-item" to="/Sabores/Clasico">Sabor Clásico</Link >
                                            <Link className="dropdown-item" to="/Sabores/Lucuma">Sabor Lúcuma</Link >
                                            <Link className="dropdown-item" to="/Sabores/Fresa">Sabor Fresa</Link >
                                            <Link className="dropdown-item" to="/Sabores/Menta">Sabor Menta</Link >
                                        </div>
                                    </li>
                                }
                                <li className="nav-item mr-1 ml-1">
                                    {CantProductos > 0 ?
                                        < button type="button" onClick={() => CabiarEstadoModal("Abrir")} className='nav-link btn-carrito'><i class="fa-solid fa-cart-shopping div-cantProducto"></i>{CantProductos}</button>
                                        :
                                        <a href={Inicio ? "#sabores" : "#main"}>
                                            <button className=' nav-link btn-carrito'><i className="fa-solid fa-cart-plus"></i></button>
                                        </a>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Navbar;
