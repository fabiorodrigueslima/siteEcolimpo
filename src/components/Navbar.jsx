import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "/Nova-logo.png";
import { whatsappUrl } from "../data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        closeMenu();
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="Cooperativa Ecolimpo — página inicial">
          <img src={Logo} alt="" width="164" height="76" />
        </Link>
        <button ref={toggleRef} className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="menu-principal">
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="menu-principal" className={`navbar-menu ${menuOpen ? "active" : ""}`} aria-label="Navegação principal">
          <NavLink to="/" end onClick={closeMenu}>Início</NavLink>
          <NavLink to="/quem-somos" onClick={closeMenu}>Quem somos</NavLink>
          <div className={`dropdown ${dropdownOpen ? "active" : ""}`}>
            <button className="dropdown-btn" type="button" aria-expanded={dropdownOpen} onClick={() => setDropdownOpen((open) => !open)}>
              Coleta seletiva <span aria-hidden="true">▾</span>
            </button>
            <div className="dropdown-menu">
              <NavLink to="/coleta-seletiva/slu" onClick={closeMenu}>Atendimento SLU</NavLink>
              <NavLink to="/condominio" onClick={closeMenu}>Condomínios</NavLink>
              <NavLink to="/materiais-reciclaveis" onClick={closeMenu}>Materiais recicláveis</NavLink>
            </div>
          </div>
          <NavLink to="/educacao-ambiental" onClick={closeMenu}>Educação ambiental</NavLink>
          <NavLink to="/socio-cooperado" onClick={closeMenu}>Sócio-cooperado</NavLink>
          <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
          <a className="nav-cta" href={whatsappUrl("Olá! Gostaria de falar com a Cooperativa Ecolimpo.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

