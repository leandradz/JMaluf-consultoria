import { useTranslation } from 'react-i18next';
import '../styles/pages.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.description')}</p>
    </div>
  );
}

export default Contact;
