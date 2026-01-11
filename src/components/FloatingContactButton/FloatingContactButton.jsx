import { useTranslation } from "react-i18next";
import { Button } from "antd";
import "./FloatingContactButton.css";

function FloatingContactButton() {
  const { t } = useTranslation();

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      type="primary"
      size="large"
      className="floating-contact-button"
      onClick={handleScrollToContact}
    >
      {t("contact.title")}
    </Button>
  );
}

export default FloatingContactButton;
