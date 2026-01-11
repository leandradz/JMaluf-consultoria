import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import logo from "../../assets/logo-jmaluf.png";
import "./Home.css";

const { Title, Paragraph } = Typography;

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <Row gutter={[48, 48]} align="middle" className="home-row">
        <Col xs={24} md={14} className="home-image-col">
          <img
            draggable={false}
            alt="Logo JMaluf Consultoria"
            src={logo}
            className="home-logo"
          />
        </Col>

        <Col xs={24} md={10} className="home-text-col">
          <Title level={1} className="home-title" style={{ color: "#0b2a4a" }}>
            {t("home.title")}
          </Title>
          <Paragraph className="home-description">
            {t("home.description")}
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
