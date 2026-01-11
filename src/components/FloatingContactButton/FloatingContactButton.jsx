import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import "./FloatingContactButton.css";

function FloatingContactButton() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/contact") {
    return null;
  }

  return (
    <Button
      type="primary"
      size="large"
      className="floating-contact-button"
      onClick={() => navigate("/contact")}
    >
      {t("contact.title")}
    </Button>
  );
}

export default FloatingContactButton;
