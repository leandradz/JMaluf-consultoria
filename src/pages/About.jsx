import { useTranslation } from 'react-i18next';
import '../styles/pages.css';

function About() {
  const { t } = useTranslation();

  return (
    <div className="page">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}

export default About;
