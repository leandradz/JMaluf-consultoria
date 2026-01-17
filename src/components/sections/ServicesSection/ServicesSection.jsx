import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import {
  LineChartOutlined,
  BulbOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ServiceCard from "../../ServiceCard/ServiceCard";
import "./ServicesSection.css";

const { Title, Paragraph } = Typography;

/**
 * ServicesSection Component
 * Section displaying company services
 */
function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <LineChartOutlined />,
      title: t("services.items.strategic.title"),
      description: t("services.items.strategic.description"),
    },
    {
      icon: <BulbOutlined />,
      title: t("services.items.innovation.title"),
      description: t("services.items.innovation.description"),
    },
    {
      icon: <GlobalOutlined />,
      title: t("services.items.environmental.title"),
      description: t("services.items.environmental.description"),
    },
    {
      icon: <SettingOutlined />,
      title: t("services.items.process.title"),
      description: t("services.items.process.description"),
    },
  ];

  return (
    <div id="services" className="services-section">
      <div className="services-content">
        <Title level={1} className="services-title">
          {t("services.title")}
        </Title>
        <Paragraph className="services-description">
          {t("services.description")}
        </Paragraph>

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
      </div>
    </div>
  );
}

export default ServicesSection;
