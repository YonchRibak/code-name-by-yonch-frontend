import { useTranslation } from "react-i18next";
import logoSrc from "../../../public/codeNameIcon.png";
import i18n from "@/i18n";
function StartScreen(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src={logoSrc} className="w-[15vw] animate-pulse" />
      <h1 className="text-6xl font-semibold text-secondary my-12 opacity-0 animate-fade-in delay-250 ">
        {t("startScreen.header")}
      </h1>
      <p
        style={{ direction: i18n.language === "en-US" ? "ltr" : "rtl" }}
        className="text-4xl text-primary opacity-0 animate-fade-in delay-1000 whitespace-pre-line"
      >
        {t("startScreen.description")}
      </p>
    </div>
  );
}

export default StartScreen;
