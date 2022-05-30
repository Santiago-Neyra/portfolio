import "../NavBar/NavBar.css"
import React from "react"

export const NavBar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><p className="text-brand">Santiago Neyra</p></a>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img className="hamburguesa" src="https://i.postimg.cc/8C28ZD3F/menuuu.png"></img></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Proyectos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Habilidades</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}