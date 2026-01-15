import { useTranslation } from "react-i18next";
import { Typography, Row, Col, Card, Button } from "antd";
import {
  LineChartOutlined,
  BulbOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const { Title, Paragraph } = Typography;

function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="services-container">
      <div className="services-content">
        <Title level={1} className="services-title">
          {t("services.title")}
        </Title>
        <Paragraph className="services-description">
          {t("services.description")}
        </Paragraph>

        <Row gutter={[32, 32]} className="services-grid">
          {services.map((service, index) => (
            <Col xs={24} sm={24} md={12} lg={12} xl={12} key={index}>
              <Card className="service-card" bordered={false}>
                <div className="service-icon">{service.icon}</div>
                <Title level={3} className="service-title">
                  {service.title}
                </Title>
                <Paragraph className="service-description">
                  {service.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="services-cta">
          <Button
            type="primary"
            size="large"
            onClick={handleContactClick}
            className="services-contact-button"
          >
            {t("services.contactButton")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
