import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import { SafetyOutlined, DesktopOutlined, GlobalOutlined } from "@ant-design/icons";
import ValueCard from "../../ValueCard/ValueCard";
import "./AboutSection.css";

const { Title, Paragraph } = Typography;

/**
 * AboutSection Component
 * Section displaying company information, values, and mission
 */
function AboutSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: <SafetyOutlined />,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.description"),
    },
    {
      icon: <DesktopOutlined />,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: <GlobalOutlined />,
      title: t("about.values.sustainability.title"),
      description: t("about.values.sustainability.description"),
    },
  ];

  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <Title level={1} className="about-title">
          {t("about.title")}
        </Title>
        <Paragraph className="about-description">
          {t("about.description")}
        </Paragraph>

        {/* Our Values */}
        <Title level={2} className="about-subtitle">
          {t("about.valuesTitle")}
        </Title>
        <Row gutter={[32, 32]} className="values-grid">
          {values.map((value, index) => (
            <Col xs={24} sm={24} md={8} key={index}>
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            </Col>
          ))}
        </Row>

        {/* Our Mission */}
        <Title level={2} className="about-subtitle">
          {t("about.missionTitle")}
        </Title>
        <Paragraph className="about-mission">
          {t("about.missionDescription")}
        </Paragraph>
      </div>
    </div>
  );
}

export default AboutSection;
