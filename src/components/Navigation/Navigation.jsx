import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Anchor, Button, Space, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-icon.png";
import "./Navigation.css";

const { Header } = Layout;

function Navigation() {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDrawerOpen(false);
  };

  const anchorItems = [
    {
      key: "home",
      href: "#home",
      title: t("nav.home"),
    },
    {
      key: "about",
      href: "#about",
      title: t("nav.about"),
    },
    {
      key: "contact",
      href: "#contact",
      title: t("nav.contact"),
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
          <Anchor
            items={anchorItems}
            direction="horizontal"
            targetOffset={64}
            style={{
              backgroundColor: "transparent",
              padding: 0,
            }}
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
        <Anchor
          items={anchorItems}
          targetOffset={64}
          onClick={() => setDrawerOpen(false)}
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
