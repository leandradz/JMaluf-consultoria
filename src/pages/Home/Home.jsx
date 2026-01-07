import { useTranslation } from "react-i18next";
import "./Home.css";
import logo from "../../assets/jmaluf-consultoria.png";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div style={{ textAlign: "center" }}>
        <img className="home-logo" src={logo} alt="Description"></img>
      </div>
      <div>
        <h1 className="title">{t("home.title")}</h1>
        <p className="description">
          {t("home.description")}
        </p>
      </div>
    </div>
  );
}

export default Home;
