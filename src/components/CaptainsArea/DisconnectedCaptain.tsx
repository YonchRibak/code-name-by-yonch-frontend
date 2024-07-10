import { useTranslation } from "react-i18next";
import LangToggler from "../SharedArea/LangToggler";
import PulsatingLogo from "../SharedArea/PulsatingLogo";
import i18n from "@/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../SharedArea/Interact/Loading";

function DisconnectedCaptain(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const { t } = useTranslation();
  if (loading)
    return (
      <div className="flex justify-center items-center px-16 pb-16">
        <Loading />
      </div>
    );
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col overflow-hidden justify-center items-center gap-3 w-full h-full"
      >
        <LangToggler className="w-1/4" />
        <PulsatingLogo />
        <div
          style={{ direction: i18n.language === "en-US" ? "ltr" : "rtl" }}
          className="text-xl font-semibold whitespace-pre-line"
        >
          {t("captain.disconnected")}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default DisconnectedCaptain;
