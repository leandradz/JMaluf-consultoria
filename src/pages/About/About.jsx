import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import "./About.css";

const { Title, Paragraph } = Typography;

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24}>
          <Title level={1} className="page-title">
            {t("about.title")}
          </Title>
          <Paragraph className="page-description">
            {t("about.description")}
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default About;
