import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Typography, Row, Col, Form, Input, Button, message, Card } from "antd";
import {
  PhoneOutlined,
  LinkedinOutlined,
  LineChartOutlined,
  BulbOutlined,
  GlobalOutlined,
  SettingOutlined,
  SafetyOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import logo from "../../assets/logo-jmaluf.png";
import "./Home.css";

const { Title, Paragraph } = Typography;

// ========== CONFIGURAÇÃO EMAIL JS ==========
// Para configurar o EmailJS, siga estes passos:
// 1. Acesse: https://www.emailjs.com/
// 2. Crie uma conta gratuita
// 3. Vá em "Email Services" e adicione seu provedor (Gmail, Hotmail, etc)
// 4. Vá em "Email Templates" e crie um template com as variáveis: {{name}}, {{email}}, {{message}}
// 5. Copie o Service ID, Template ID e Public Key
// 6. Atualize as variáveis abaixo com seus IDs

const SERVICE_ID = "YOUR_SERVICE_ID"; // Substituir pelo seu Service ID do EmailJS
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Substituir pelo seu Template ID do EmailJS
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Substituir pela sua Public Key do EmailJS
const RECIPIENT_EMAIL = "leticia_andrade94@hotmail.com"; // Substituir pelo seu email para testes ou produção

// Inicializar EmailJS apenas uma vez
emailjs.init(PUBLIC_KEY);

function Home() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const phoneNumber = "+55 (11) 55555-5555";

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: values.name,
        email: values.email,
        message: values.message,
        to_email: RECIPIENT_EMAIL,
      });

      message.success("Mensagem enviada com sucesso!");
      form.resetFields();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      message.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\D/g, ""));
    message.success("Telefone copiado!");
  };

  const handleRedirectLinkedIn = () => {
    window.open("https://linkedin.com.br", "_blank");
  };

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
    <div>
      {/* Seção Home */}
      <div id="home" className="home-container">
        <div className="home-background-decoration"></div>
        <Row
          gutter={[64, 64]}
          align="middle"
          className="home-row"
          style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 1 }}
        >
          <Col xs={24} md={12} lg={11} className="home-image-col">
            <div className="home-logo-wrapper">
              <img
                draggable={false}
                alt="Logo JMaluf Consultoria"
                src={logo}
                className="home-logo"
              />
            </div>
          </Col>

          <Col xs={24} md={12} lg={13} className="home-text-col">
            <div className="home-label">CONSULTORIA ESPECIALIZADA</div>
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
            <div className="home-stats">
              <div className="home-stat-item">
                <div className="home-stat-number">20+</div>
                <div className="home-stat-label">Anos de Experiência</div>
              </div>
              <div className="home-stat-divider"></div>
              <div className="home-stat-item">
                <div className="home-stat-number">100+</div>
                <div className="home-stat-label">Projetos Realizados</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Seção About */}
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
            <Col xs={24} sm={24} md={8}>
              <Card className="value-card" bordered={false}>
                <div className="value-icon">
                  <SafetyOutlined />
                </div>
                <Title level={4} className="value-title">
                  {t("about.values.integrity.title")}
                </Title>
                <Paragraph className="value-description">
                  {t("about.values.integrity.description")}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Card className="value-card" bordered={false}>
                <div className="value-icon">
                  <DesktopOutlined />
                </div>
                <Title level={4} className="value-title">
                  {t("about.values.quality.title")}
                </Title>
                <Paragraph className="value-description">
                  {t("about.values.quality.description")}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Card className="value-card" bordered={false}>
                <div className="value-icon">
                  <GlobalOutlined />
                </div>
                <Title level={4} className="value-title">
                  {t("about.values.sustainability.title")}
                </Title>
                <Paragraph className="value-description">
                  {t("about.values.sustainability.description")}
                </Paragraph>
              </Card>
            </Col>
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

      {/* Seção Services */}
      <div id="services" className="services-section">
        <div className="services-section-content">
          <Title level={1} className="services-section-title">
            {t("services.title")}
          </Title>
          <Paragraph className="services-section-description">
            {t("services.description")}
          </Paragraph>

          <Row gutter={[32, 32]} className="services-section-grid">
            {services.map((service, index) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={12} key={index}>
                <Card className="service-section-card" bordered={false}>
                  <div className="service-section-icon">{service.icon}</div>
                  <Title level={3} className="service-section-card-title">
                    {service.title}
                  </Title>
                  <Paragraph className="service-section-card-description">
                    {service.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

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
                    loading={loading}
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
