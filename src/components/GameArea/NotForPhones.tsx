import { useTranslation } from "react-i18next";
import LangToggler from "../SharedArea/LangToggler";

function NotForPhones(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <LangToggler />
      <p className="text-2xl p-8">{t("notForPhone")}</p>
    </div>
  );
}

export default NotForPhones;
