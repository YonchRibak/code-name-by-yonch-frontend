import useGameContext from "@/Hooks/useGameContext";
import { appConfig } from "@/Utils/appConfig";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

function CaptainsData(): JSX.Element {
  const { session } = useGameContext();
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col h-full justify-evenly items-center ${
        i18n.language === "en-US" ? "ltr" : "rtl"
      }`}
    >
      <div className="text-2xl whitespace-pre-line">
        {t("captainsData.instructions")}
      </div>
      <span className="text-2xl">{`${appConfig.frontendBaseUrl}/captain`}</span>
      <div className="text-2xl whitespace-pre-line">
        {t("captainsData.instructionsContinued")}
      </div>
      <div className={`text-3xl font-bold`}>
        {t("captainsData.sessionCode")} {session.sessionId}
      </div>
      <div className="bg-white p-5 grid place-items-center w-fit">
        <QRCode
          value={`${appConfig.frontendBaseUrl}/captain/${session.sessionId}`}
        />
      </div>
    </div>
  );
}

export default CaptainsData;
