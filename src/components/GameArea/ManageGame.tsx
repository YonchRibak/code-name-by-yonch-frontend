import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import useGameContext from "@/Hooks/useGameContext";
import CaptainsData from "./CaptainsData";
import Score from "./Score";
import { useState } from "react";
import { gameService } from "@/Services/GameService";
import { motion, AnimatePresence } from "framer-motion";

function ManageGame(): JSX.Element {
  const [currIndicesArr, setCurrIndicesArr] = useState<number[]>([]);
  const { t } = useTranslation();
  const { session, setSession } = useGameContext();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full flex flex-col justify-around "
      >
        {session.numberOfUsersInRoom < 3 ? ( //If less than 2 captains have connected, render Captains data
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CaptainsData />
            </motion.div>
          </AnimatePresence>
        ) : (
          // if 2 captains have connected, render score and submit button.
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-7"
            >
              <Score />
              <Button
                className={`transition ease-in-out duration-500 w-[15vw] custom-dark-shadow text-3xl h-32 ${
                  session.indicesOfRevealedCards?.length >
                    currIndicesArr.length || !session.finishedReveal // assign background depending on whether new cards have been selected for submission.
                    ? "bg-primary dark:bg-[#5686F4]"
                    : "bg-[#FFA857] dark:bg-[#EA891B]"
                }`}
                onClick={() =>
                  gameService.handleSubmitAnswer(
                    session,
                    setSession,
                    setCurrIndicesArr
                  )
                }
                disabled={!session.finishedReveal}
              >
                {session.indicesOfRevealedCards?.length >
                  currIndicesArr.length || !session.finishedReveal // assign text depending on whether new cards have been selected for submission.
                  ? t("manageGame.submitBtn")
                  : t("manageGame.forfeitTurn")}
              </Button>
            </motion.div>
          </AnimatePresence>
        )}

        <Button
          className="text-3xl h-32 bg-destructive custom-dark-shadow w-full mt-2"
          onClick={() => gameService.handleAbortGame(session, setSession)}
        >
          {t("manageGame.abortBtn")}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export default ManageGame;
