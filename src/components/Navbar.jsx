import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Banner from "../assets/Img/navbar.png";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <div className="navbar-banner">
                    <img src={Banner} alt="Cooperativa Ecolimpo" />
                </div>

                <nav className="navbar-menu">
                    <Link to="/">Início</Link>
                    <Link to="/quem-somos">Quem somos</Link>

                    <div className="dropdown">
                        <button className="dropdown-btn">
                            Coleta seletiva ▾
                        </button>

                        <div className="dropdown-menu">
                            <Link to="/coleta-seletiva/slu">SLU</Link>
                            <a href="#condominios">Condomínios</a>
                        </div>
                    </div>

                    <Link to="/educacao-ambiental">Educação ambiental</Link>
                    <Link to="/contato">Contato</Link>
                </nav>

            </div>
        </header>
    );
}