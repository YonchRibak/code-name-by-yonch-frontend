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
      <div className="flex flex-col overflow-hidden justify-center items-center gap-3 w-full h-full">
        <LangToggler className="w-1/4" />
        <div className="text-xl font-semibold whitespace-pre-line">
          {t("captain.landscape")}
        </div>
      </div>
    );
  return (
    <div className="grid grid-cols-[5%,95%] gap-2">
      <div className="relative">
        <LangToggler className="absolute top-[-4vh] left-[-4vw]" />
        <ThemeToggler className="absolute top-[10vh] left-[-4vw]" />
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
    </div>
  );
}

export default CaptainScreen;
