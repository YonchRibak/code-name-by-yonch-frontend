import { socketService } from "@/Services/SocketService";
import { Session } from "@/components/game-provider";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Params } from "react-router-dom";

function useConnectCaptainToSocketRoom(
  session: Session,
  params: Readonly<Params<string>>,
  setSession: Dispatch<SetStateAction<Session>>,
  setCaptainConnected: Dispatch<SetStateAction<boolean>>
) {
  // Use a ref to track if the connection has been made
  const hasConnected = useRef(false);

  useEffect(() => {
    if (!hasConnected.current) {
      // Connect to the socket server
      socketService.connect();

      // Emit a connection message to the server indicating a captain is trying to connect
      socketService.joinRoom(params.gameId, setSession);

      // Set the ref to true to prevent re-connecting
      hasConnected.current = true;
      setCaptainConnected(true);

      // Listen to the gameAborted event
      socketService.gameAborted(() => {
        setCaptainConnected(false);
      });
    }

    if (!session.cards.length) {
      setCaptainConnected(false);
    } else {
      setCaptainConnected(true);
    }
  }, [session.cards, session.gameStarted, params.gameId]);
}

export default useConnectCaptainToSocketRoom;
