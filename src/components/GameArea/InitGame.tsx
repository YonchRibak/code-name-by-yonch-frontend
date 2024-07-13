import { useTranslation } from "react-i18next";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import useGameContext from "@/Hooks/useGameContext";
import InfoPopover from "./InfoPopover";
import { motion, AnimatePresence } from "framer-motion";

function InitGame(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { session, setSession } = useGameContext();

  const decks = [
    { id: 1, text: t("initGame.family"), href: "/family" },
    { id: 2, text: t("initGame.adults"), href: "/adults" },
    { id: 3, text: t("initGame.goNuts"), href: "/go-nuts" },
  ];

  console.log(typeof session.cards[0]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col h-full"
      >
        <div className=" relative flex flex-col gap-6 h-full">
          <h1 className="text-4xl select-none">{t("initGame.title")}</h1>
          {decks.map((deck) => (
            <Card
              key={deck.id}
              className="h-24 cursor-pointer relative bg-secondary dark:custom-dark-shadow custom-light-shadow"
              onClick={() => {
                setSession((prev) => ({
                  ...prev,
                  lastRoute: deck.href,
                }));
                navigate(deck.href);
              }}
            >
              {deck.id === 3 && (
                <InfoPopover
                  text={t("initGame.goNutsPopover")}
                  textAlign="text-center"
                />
              )}
              <CardContent className="flex justify-center select-none font-medium items-center h-full p-2 text-3xl">
                {deck.text}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          disabled={!session.cards.length}
          onClick={() => {
            setSession((prevSession) => ({
              ...prevSession,
              gameStarted: true,
              numberOfUsersInRoom: 1,
              redScore: 0,
              blueScore: 0,
              turnsPlayed: 0,
            }));
          }}
          className="text-3xl h-40 bg-primary select-none mb-56 custom-dark-shadow"
        >
          {t("initGame.startGameBtn")}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export default InitGame;
