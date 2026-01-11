import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout, Menu, Button, Space, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-icon.png";
import "./Navigation.css";

const { Header } = Layout;

function Navigation() {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDrawerOpen(false);
  };

  const menuItems = [
    {
      key: "/",
      label: (
        <Link to="/" onClick={() => setDrawerOpen(false)}>
          {t("nav.home")}
        </Link>
      ),
    },
    {
      key: "/about",
      label: (
        <Link to="/about" onClick={() => setDrawerOpen(false)}>
          {t("nav.about")}
        </Link>
      ),
    },
    {
      key: "/contact",
      label: (
        <Link to="/contact" onClick={() => setDrawerOpen(false)}>
          {t("nav.contact")}
        </Link>
      ),
    },
  ];

  return (
    <Header className="navigation-header">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="JMaluf Consultoria" className="logo-img" />
          <span className="logo-text">JMaluf Consultoria</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            style={{ border: "none", backgroundColor: "transparent" }}
          />

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
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ border: "none" }}
        />
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
