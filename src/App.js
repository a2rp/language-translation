import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();
    const name = "Ashish Ranjan";
    const handleClick = (language) => {
        console.log(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "15px" }}>
                <input
                    type="button"
                    onClick={() => handleClick("en")}
                    value="English"
                />
                <input
                    type="button"
                    onClick={() => handleClick("fr")}
                    value="French"
                />
                <input
                    type="button"
                    onClick={() => handleClick("hin")}
                    value="Hindi"
                />
            </div>
            <h1>{t("greeting")}</h1>
            <h1>{t("iAm", { name: name })}</h1>
        </div>
    );
}

export default App;
