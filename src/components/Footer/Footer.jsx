import { useTranslation } from "react-i18next";
import { LinkedinOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com.br", "_blank");
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <nav className="footer-nav">
          {isHomePage ? (
            <>
              <a
                href="#home"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                {t("nav.home")}
              </a>
              <a
                href="#services"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                {t("nav.services")}
              </a>
              <a
                href="#about"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                {t("nav.about")}
              </a>
              <a
                href="#contact"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                {t("nav.contact")}
              </a>
            </>
          ) : (
            <>
              <a href="/" className="footer-link">
                {t("nav.home")}
              </a>
              <a
                href="/#services"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#services";
                }}
              >
                {t("nav.services")}
              </a>
              <a
                href="/#about"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#about";
                }}
              >
                {t("nav.about")}
              </a>
              <a
                href="/#contact"
                className="footer-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }}
              >
                {t("nav.contact")}
              </a>
            </>
          )}
        </nav>

        <div className="footer-social">
          <div className="footer-linkedin" onClick={handleLinkedInClick}>
            <LinkedinOutlined />
          </div>
        </div>

        <p className="footer-copyright">
          © 2026 JMaluf Consultoria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
