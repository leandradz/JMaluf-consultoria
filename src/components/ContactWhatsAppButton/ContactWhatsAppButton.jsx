import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./ContactWhatsAppButton.css";

export default function ContactWhatsAppButton({ className = "", style = {} }) {
  const { t } = useTranslation();
  const whatsappNumber = "554591211804";
  const messageText = encodeURIComponent(t("contact.otherWays.whatsappMessage"));

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${messageText}`, "_blank");
  };

  return (
    <div className={`contact-whatsapp-btn-wrapper ${className}`} style={{ display: "flex", justifyContent: "center", ...style }}>
      <Button
        type="primary"
        size="large"
        className="services-contact-button"
        onClick={handleClick}
      >
        {t("extra.talkToConsultant")}
      </Button>
    </div>
  );
}
