import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";

function Navigation() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img  className="img-logo" src={logo} alt="JMaluf Consultoria" />
        <span className="logo-text">JMaluf Consultoria</span>
      </div>
      <div className={`nav-content ${menuOpen ? "open" : ""}`}>
        <div className="nav-links">
          <Link to="/" onClick={closeMenu}>{t("nav.home")}</Link>
          <Link to="/about" onClick={closeMenu}>{t("nav.about")}</Link>
          <Link to="/contact" onClick={closeMenu}>{t("nav.contact")}</Link>
        </div>
        <div className="language-switcher">
          <button
            onClick={() => changeLanguage("pt-BR")}
            className={i18n.language === "pt-BR" ? "active" : ""}
          >
            PT
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className={i18n.language === "es" ? "active" : ""}
          >
            ES
          </button>
        </div>
      </div>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navigation;
