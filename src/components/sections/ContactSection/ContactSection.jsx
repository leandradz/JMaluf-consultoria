import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Row, Col, Form, Input, Button, message } from "antd";
import {
  PhoneOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import ContactItem from "../../ContactItem/ContactItem";
import { EMAIL_CONFIG, CONTACT_INFO } from "../../../constants/config";
import "./ContactSection.css";

const { Title, Paragraph } = Typography;

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

/**
 * ContactSection Component
 * Section with contact form and contact methods
 */
function ContactSection() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await emailjs.send(EMAIL_CONFIG.SERVICE_ID, EMAIL_CONFIG.TEMPLATE_ID, {
        name: values.name,
        email: values.email,
        message: values.message,
        to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
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
    navigator.clipboard.writeText(CONTACT_INFO.PHONE.replace(/\D/g, ""));
    message.success("Telefone copiado!");
  };

  const handleRedirectLinkedIn = () => {
    window.open(CONTACT_INFO.LINKEDIN_URL, "_blank");
  };

  const handleRedirectWhatsApp = () => {
    const messageText = encodeURIComponent(t("contact.otherWays.whatsappMessage"));
    window.open(`https://wa.me/${CONTACT_INFO.PHONE_WHATSAPP}?text=${messageText}`, "_blank");
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-content">
        <Title level={1} className="contact-title">
          {t("contact.title")}
        </Title>
        <Paragraph className="contact-description">
          {t("contact.description")}
        </Paragraph>

        <Row gutter={[48, 48]}>
          {/* Contact Form */}
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
                    message: t("contact.form.required.email") || "Please enter a valid email",
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
                    message: t("contact.form.required.message") || "Please enter your message",
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

          {/* Contact Methods */}
          <Col xs={24} md={12} className="contact-methods">
            <Title level={3} className="contact-methods-title">
              {t("contact.otherWays.title") || "Other Ways to Connect"}
            </Title>

            <ContactItem
              icon={<PhoneOutlined />}
              title={t("contact.otherWays.phone") || "Phone"}
              text={CONTACT_INFO.PHONE}
              onClick={handleCopyPhone}
            />

            <ContactItem
              icon={<LinkedinOutlined />}
              title={t("contact.otherWays.linkedin") || "LinkedIn"}
              text={t("contact.otherWays.linkedinText") || "Connect with us on LinkedIn"}
              onClick={handleRedirectLinkedIn}
            />

            <ContactItem
              icon={<WhatsAppOutlined />}
              title={t("contact.otherWays.whatsapp") || "WhatsApp"}
              text={t("contact.otherWays.whatsappText") || "Send us a message on WhatsApp"}
              onClick={handleRedirectWhatsApp}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactSection;
