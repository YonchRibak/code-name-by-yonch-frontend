import { useEffect } from "react";
import useGameContext from "./useGameContext";

function useKeepScore(cardStatus: string, team: string): void {
  const { session, setSession } = useGameContext();

  useEffect(() => {
    if (cardStatus === "revealed" && session.answerSubmitted) {
      switch (team) {
        case "red":
          setSession((prevSession) => {
            return {
              ...prevSession,
              redScore: prevSession.redScore + 1,
            };
          });
          break;
        case "blue":
          setSession((prevSession) => {
            return {
              ...prevSession,
              blueScore: prevSession.blueScore + 1,
            };
          });
          break;
      }
    }
  }, [cardStatus]);
}

export default useKeepScore;
