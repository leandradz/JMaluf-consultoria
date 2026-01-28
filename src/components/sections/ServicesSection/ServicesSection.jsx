import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import {
  ExperimentOutlined, // Desenvolvimento e otimização
  FundProjectionScreenOutlined, // Avaliação de viabilidade
  DeploymentUnitOutlined, // Escalonamento e execução
  TeamOutlined, // Suporte técnico à decisão e conexão
} from "@ant-design/icons";
import ServiceCard from "../../ServiceCard/ServiceCard";
import "./ServicesSection.css";
import ContactWhatsAppButton from "../../ContactWhatsAppButton/ContactWhatsAppButton";
import { CONTACT_INFO } from "../../../constants/config";

const { Title, Paragraph } = Typography;

/**
 * ServicesSection Component
 * Section displaying company services
 */
function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <ExperimentOutlined />, // Desenvolvimento e otimização
      title: t("services.items.development.title"),
      description: t("services.items.development.description"),
    },
    {
      icon: <FundProjectionScreenOutlined />, // Avaliação de viabilidade
      title: t("services.items.availability.title"),
      description: t("services.items.availability.description"),
    },
    {
      icon: <DeploymentUnitOutlined />, // Escalonamento e execução
      title: t("services.items.escalation.title"),
      description: t("services.items.escalation.description"),
    },
    {
      icon: <TeamOutlined />, // Suporte técnico à decisão e conexão
      title: t("services.items.support.title"),
      description: t("services.items.support.description"),
    },
  ];

  return (
    <div id="services" className="services-section">
      <div className="services-content">
        <Title level={1} className="services-title">
          {t("services.title")}
        </Title>
        <Title level={3} className="services-subtitle">
          {t("services.subtitle")}
        </Title>
        <Paragraph className="services-description">
          {t("services.description")}
        </Paragraph>

        <Title level={3} className="services-subtitle">
          {t("services.cardsTitle")}
        </Title>
        <Row gutter={[32, 32]} className="services-grid">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={12} lg={12} key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
        <div className="services-cta">
          <ContactWhatsAppButton whatsappNumber={CONTACT_INFO.PHONE_WHATSAPP} />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
