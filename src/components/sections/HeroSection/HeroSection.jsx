import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import logo from "../../../assets/logo-jmaluf.png";
import { STATS } from "../../../constants/config";
import "./HeroSection.css";

const { Title, Paragraph } = Typography;

/**
 * HeroSection Component
 * Main landing section with company logo, title, and statistics
 */
function HeroSection() {
  const { t } = useTranslation();

  return (
    <div id="home" className="hero-section">
      <div className="hero-background-decoration"></div>
      <Row
        gutter={[64, 64]}
        align="middle"
        className="hero-row"
      >
        <Col xs={24} md={12} lg={11} className="hero-image-col">
          <div className="hero-logo-wrapper">
            <img
              draggable={false}
              alt="Logo JMaluf Consultoria"
              src={logo}
              className="hero-logo"
            />
          </div>
        </Col>

        <Col xs={24} md={12} lg={13} className="hero-text-col">
          <div className="hero-label">CONSULTORIA ESPECIALIZADA</div>
          <Title level={1} className="hero-title">
            {t("home.title")}
          </Title>
          <Paragraph className="hero-description">
            {t("home.description")}
          </Paragraph>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">{STATS.YEARS_EXPERIENCE}</div>
              <div className="hero-stat-label">Anos de Experiência</div>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">{STATS.PROJECTS_COMPLETED}</div>
              <div className="hero-stat-label">Projetos Realizados</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection;
