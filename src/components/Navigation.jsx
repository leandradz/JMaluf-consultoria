import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";
import logo from "../../public/logo.png";

function Navigation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img src={logo} alt="JMaluf Consultoria" width={24} /> JMaluf
        Consultoria
      </div>
      <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
        <div className="nav-links">
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/about">{t("nav.about")}</Link>
          <Link to="/contact">{t("nav.contact")}</Link>
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
    </nav>
  );
}

export default Navigation;
