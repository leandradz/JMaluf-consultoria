import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Anchor, Button, Space, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-icon.png";
import "./Navigation.css";

const { Header } = Layout;

function Navigation() {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDrawerOpen(false);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setDrawerOpen(false);
  };

  return (
    <Header className="navigation-header">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="JMaluf Consultoria" className="logo-img" />
          <span className="logo-text">JMaluf Consultoria</span>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Space size="large">
            {isHomePage ? (
              <>
                <a
                  href="#home"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("home");
                  }}
                >
                  {t("nav.home")}
                </a>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  {t("nav.about")}
                </a>
                <a
                  href="#services"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("services");
                  }}
                >
                  {t("nav.services")}
                </a>
                <a
                  href="#contact"
                  className="nav-link"
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
                <Link to="/" className="nav-link">
                  {t("nav.home")}
                </Link>
                <a
                  href="/#about"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#about";
                  }}
                >
                  {t("nav.about")}
                </a>
                <a
                  href="/#services"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#services";
                  }}
                >
                  {t("nav.services")}
                </a>
                <a
                  href="/#contact"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#contact";
                  }}
                >
                  {t("nav.contact")}
                </a>
              </>
            )}
          </Space>

          {/* Language Switcher */}
          <Space>
            <Button
              type={i18n.language === "pt-BR" ? "primary" : "default"}
              size="small"
              onClick={() => changeLanguage("pt-BR")}
            >
              PT
            </Button>
            <Button
              type={i18n.language === "en" ? "primary" : "default"}
              size="small"
              onClick={() => changeLanguage("en")}
            >
              EN
            </Button>
            <Button
              type={i18n.language === "es" ? "primary" : "default"}
              size="small"
              onClick={() => changeLanguage("es")}
            >
              ES
            </Button>
          </Space>
        </div>

        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setDrawerOpen(true)}
          className="mobile-menu-btn"
        />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="mobile-nav-links">
          {isHomePage ? (
            <>
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                {t("nav.home")}
              </a>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                {t("nav.about")}
              </a>
              <a
                href="#services"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
              >
                {t("nav.services")}
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
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
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={() => setDrawerOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <a
                href="/#about"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setDrawerOpen(false);
                  window.location.href = "/#about";
                }}
              >
                {t("nav.about")}
              </a>
              <a
                href="/#services"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setDrawerOpen(false);
                  window.location.href = "/#services";
                }}
              >
                {t("nav.services")}
              </a>
              <a
                href="/#contact"
                className="mobile-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setDrawerOpen(false);
                  window.location.href = "/#contact";
                }}
              >
                {t("nav.contact")}
              </a>
            </>
          )}
        </div>
        <div style={{ marginTop: "2rem", display: "flex", gap: "0.5rem" }}>
          <Button
            type={i18n.language === "pt-BR" ? "primary" : "default"}
            block
            onClick={() => changeLanguage("pt-BR")}
          >
            PT
          </Button>
          <Button
            type={i18n.language === "en" ? "primary" : "default"}
            block
            onClick={() => changeLanguage("en")}
          >
            EN
          </Button>
          <Button
            type={i18n.language === "es" ? "primary" : "default"}
            block
            onClick={() => changeLanguage("es")}
          >
            ES
          </Button>
        </div>
      </Drawer>
    </Header>
  );
}

export default Navigation;
