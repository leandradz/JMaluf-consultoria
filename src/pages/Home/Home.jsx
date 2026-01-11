import { useTranslation } from "react-i18next";
import { Typography, Row, Col, Form, Input, Button, message } from "antd";
import { PhoneOutlined, LinkedinOutlined } from "@ant-design/icons";
import logo from "../../assets/logo-jmaluf.png";
import "./Home.css";

const { Title, Paragraph } = Typography;

function Home() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const phoneNumber = "+55 (11) 55555-5555";

  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\D/g, ""));
    message.success("Telefone copiado!");
  };

  const handleRedirectLinkedIn = () => {
    window.open("https://linkedin.com.br", "_blank");
  };

  return (
    <div>
      {/* Seção Home */}
      <div id="home" className="home-container">
        <Row
          gutter={[48, 48]}
          align="middle"
          className="home-row"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Col xs={24} md={14} className="home-image-col">
            <img
              draggable={false}
              alt="Logo JMaluf Consultoria"
              src={logo}
              className="home-logo"
            />
          </Col>

          <Col xs={24} md={10} className="home-text-col">
            <Title
              level={1}
              className="home-title"
              style={{ color: "#0b2a4a" }}
            >
              {t("home.title")}
            </Title>
            <Paragraph className="home-description">
              {t("home.description")}
            </Paragraph>
          </Col>
        </Row>
      </div>

      {/* Seção About */}
      {/* <div id="about" className="page-container">
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
      </div> */}

      {/* Seção Contact */}
      <div id="contact" className="contact-container">
        <div className="contact-content">
          <Title level={1} className="contact-title">
            {t("contact.title")}
          </Title>
          <Paragraph className="contact-description">
            {t("contact.description")}
          </Paragraph>

          <Row gutter={[48, 48]}>
            {/* Formulário */}
            <Col xs={24} md={12}>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="contact-form"
              >
                <Form.Item
                  label={<span className="form-label">{t("contact.form.name")}</span>}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: t("contact.form.required.name") || "Please enter your name",
                    },
                  ]}
                >
                  <Input
                    placeholder={t("contact.form.placeholder.name")}
                    className="form-input"
                    size="large"
                  />
                </Form.Item>
                <Form.Item
                  label={<span className="form-label">{t("contact.form.email")}</span>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message:
                        t("contact.form.required.email") || "Please enter a valid email",
                    },
                  ]}
                >
                  <Input
                    placeholder={t("contact.form.placeholder.email")}
                    className="form-input"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="form-label">{t("contact.form.message")}</span>}
                  name="message"
                  rules={[
                    {
                      required: true,
                      message:
                        t("contact.form.required.message") || "Please enter your message",
                    },
                  ]}
                >
                  <Input.TextArea
                    placeholder={t("contact.form.placeholder.message")}
                    className="form-textarea"
                    rows={5}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="submit-btn"
                  >
                    {t("contact.form.submit") || "Send Message"}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            {/* Outras formas de contato */}
            <Col xs={24} md={12} className="contact-methods">
              <Title level={3} className="contact-methods-title">
                {t("contact.otherWays.title") || "Other Ways to Connect"}
              </Title>

              {/* Phone */}
              <div className="contact-item" onClick={handleCopyPhone}>
                <div className="contact-icon">
                  <PhoneOutlined />
                </div>
                <div className="contact-info">
                  <Title level={5} className="contact-item-title">
                    {t("contact.otherWays.phone") || "Phone"}
                  </Title>
                  <Paragraph className="contact-item-text">
                    {phoneNumber}
                  </Paragraph>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item" onClick={handleRedirectLinkedIn}>
                <div className="contact-icon">
                  <LinkedinOutlined />
                </div>
                <div className="contact-info">
                  <Title level={5} className="contact-item-title">
                    {t("contact.otherWays.linkedin") || "LinkedIn"}
                  </Title>
                  <Paragraph className="contact-item-text">
                    {t("contact.otherWays.linkedinText") || "Connect with us on LinkedIn"}
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
