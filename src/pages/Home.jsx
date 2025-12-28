import { useTranslation } from "react-i18next";
import "../styles/pages.css";
import logo from "../../public/jmaluf-consultoria.png";

function Home() {
  const { t } = useTranslation();

  return (
    <div
      className="page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 48,
        gap: 24,
      }}
    >
      <img src={logo} alt="Description" width={508}></img>
      <div>
        <h1 style={{ fontSize: 48, fontWeight: 900 }}>{t("home.title")}</h1>
        <p style={{ fontSize: 16, lineHeight: "24px" }}>
          {t("home.description")}
        </p>
      </div>
    </div>
  );
}

export default Home;
