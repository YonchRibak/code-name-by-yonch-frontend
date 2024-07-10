import { useTranslation } from "react-i18next";
import LangToggler from "../SharedArea/LangToggler";
import PulsatingLogo from "../SharedArea/PulsatingLogo";
import i18n from "@/i18n";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";

function NotForPhones(): JSX.Element {
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center h-full"
      >
        <LangToggler />
        <PulsatingLogo />
        <p
          style={{ direction: i18n.language === "en-US" ? "ltr" : "rtl" }}
          className="text-xl p-8 whitespace-pre-line"
        >
          {t("notForPhone")}
        </p>
        <a href="/captain">
          <Button>{t("goToCaptainsLogin")}</Button>
        </a>
      </motion.div>
    </AnimatePresence>
  );
}

export default NotForPhones;
