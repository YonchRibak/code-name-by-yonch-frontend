import { useTranslation } from "react-i18next";
import LangToggler from "../SharedArea/LangToggler";
import PulsatingLogo from "../SharedArea/PulsatingLogo";
import i18n from "@/i18n";

function DisconnectedCaptain(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center gap-3 w-full h-full">
      <LangToggler className="w-1/4" />
      <PulsatingLogo />
      <div
        style={{ direction: i18n.language === "en-US" ? "ltr" : "rtl" }}
        className="text-xl font-semibold whitespace-pre-line"
      >
        {t("captain.disconnected")}
      </div>
    </div>
  );
}

export default DisconnectedCaptain;
