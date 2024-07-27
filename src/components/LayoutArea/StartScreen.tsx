import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import PulsatingLogo from "../SharedArea/PulsatingLogo";

function StartScreen(): JSX.Element {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-start items-center mt-16"
      >
        <PulsatingLogo />
        <h1 className="3xl:text-6xl xl:text-5xl font-semibold text-secondary my-12 opacity-0 animate-fade-in delay-250 ">
          {t("startScreen.header")}
        </h1>
        <p
          style={{ direction: i18n.language === "en-US" ? "ltr" : "rtl" }}
          className="xl:text-4xl lg:text-3xl sm:text-xl text-primary opacity-0 animate-fade-in delay-1000 whitespace-pre-line"
        >
          {t("startScreen.description")}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default StartScreen;
