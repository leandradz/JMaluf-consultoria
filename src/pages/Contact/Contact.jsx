import { useTranslation } from "react-i18next";
import { Typography, Row, Col } from "antd";
import "./Contact.css";

const { Title, Paragraph } = Typography;

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24}>
          <Title level={1} className="page-title">
            {t("contact.title")}
          </Title>
          <Paragraph className="page-description">
            {t("contact.description")}
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
