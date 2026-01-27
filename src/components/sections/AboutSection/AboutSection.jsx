import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import {
  TrophyOutlined,
  SafetyOutlined,
  EyeOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import ValueCard from "../../ValueCard/ValueCard";
import "./AboutSection.css";

const { Title, Paragraph } = Typography;

/**
 * AboutSection Component
 * Section displaying company information, values, and mission
 */
function AboutSection() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: <TrophyOutlined />,
      title: t("about.principles.integrity.title"),
      description: t("about.principles.integrity.description"),
    },
    {
      icon: <SafetyOutlined />,
      title: t("about.principles.confidentiality.title"),
      description: t("about.principles.confidentiality.description"),
    },
    {
      icon: <EyeOutlined />,
      title: t("about.principles.transparency.title"),
      description: t("about.principles.transparency.description"),
    },
    {
      icon: <RocketOutlined />,
      title: t("about.principles.businessFocus.title"),
      description: t("about.principles.businessFocus.description"),
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
        <Paragraph className="about-description">
          {t("about.description_1")}
        </Paragraph>
        <Paragraph className="about-description">
          {t("about.description_2")}
        </Paragraph>
        {/* Our Values */}
        <Title level={2} className="about-subtitle">
          {t("about.principlesTitle")}
        </Title>
        <Row gutter={[24, 24]} className="values-grid">
          {principles.map((principle, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <ValueCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default AboutSection;
