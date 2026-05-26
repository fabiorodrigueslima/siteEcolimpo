import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Banner from "../assets/Img/Navbar-novo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const fecharMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-banner">
                    <img src={Banner} alt="Cooperativa Ecolimpo" />
                </div>

                <button
                    className="menu-toggle"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>

                <nav
                    className={`navbar-menu ${menuOpen ? "active" : ""}`}
                    aria-label="Navegação principal"
                >
                    <Link to="/" onClick={fecharMenu}>Início</Link>
                    <Link to="/quem-somos" onClick={fecharMenu}>Quem somos</Link>

                    <div className={`dropdown ${dropdownOpen ? "active" : ""}`}>
                        <button
                            className="dropdown-btn"
                            type="button"
                            aria-haspopup="true"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Coleta seletiva ▾
                        </button>

                        <div className="dropdown-menu">
                            <Link to="/coleta-seletiva/slu" onClick={fecharMenu}>SLU</Link>
                            <Link to="/condominio" onClick={fecharMenu}>Condomínios</Link>
                        </div>
                    </div>

                    <Link to="/educacao-ambiental" onClick={fecharMenu}>
                        Educação ambiental
                    </Link>

                    <Link to="/contato" onClick={fecharMenu}>
                        Contato
                    </Link>
                </nav>
            </div>
        </header>
    );
}