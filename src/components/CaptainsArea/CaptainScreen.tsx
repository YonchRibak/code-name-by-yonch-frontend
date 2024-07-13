import useGameContext from "@/Hooks/useGameContext";
import { useParams } from "react-router-dom";
import CardsContainer from "../GameArea/CardsContainer";
import RandomWord from "@/Models/randomWord";
import WikiObj from "@/Models/WikiObj";
import useConnectCaptainToSocketRoom from "@/Hooks/useConnectCaptainToSocketRoom";
import useMediaQuery from "@custom-react-hooks/use-media-query";
import { useTranslation } from "react-i18next";
import LangToggler from "../SharedArea/LangToggler";
import ThemeToggler from "../SharedArea/ThemeToggler";
import DisconnectedCaptain from "./DisconnectedCaptain";
import { useState } from "react";
import PulsatingLogo from "../SharedArea/PulsatingLogo";
import { AnimatePresence, motion } from "framer-motion";
import ScreenToggler from "../SharedArea/ScreenToggler";

function CaptainScreen(): JSX.Element {
  const [captainConnected, setCaptainConnected] = useState(true);
  const { session, setSession } = useGameContext();
  const { t } = useTranslation();
  const landscape = useMediaQuery("(orientation: landscape)");
  const params = useParams();

  useConnectCaptainToSocketRoom(
    session,
    params,
    setSession,
    setCaptainConnected
  );



  if (!captainConnected) return <DisconnectedCaptain />;
  if (!landscape)
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
          <div className="text-xl font-semibold whitespace-pre-line">
            {t("captain.landscape")}
          </div>
        </motion.div>
      </AnimatePresence>
    );
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-[5%,95%] gap-2 px-16"
      >
        <div className="relative">
          <ScreenToggler className="absolute top-[-4vh] left-[-4vw]" />
          <LangToggler className="absolute top-[10vh] left-[-4vw]" />
          <ThemeToggler className="absolute top-[24vh] left-[-4vw]" />
        </div>

        <CardsContainer
          randomWords={
            (session.cards[0] as WikiObj)?.pageid
              ? null
              : (session.cards as RandomWord[])
          }
          isCaptain
          cardsType={
            (session.cards[0] as WikiObj)?.pageid ? "WikiObj" : "RandomWord"
          }
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default CaptainScreen;
