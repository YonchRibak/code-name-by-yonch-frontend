import useGameContext from "@/Hooks/useGameContext";
import GameCard from "./GameCard";
import RandomWord from "@/Models/randomWord";
import { useState } from "react";
import useDisplayCards from "@/Hooks/useDisplayCards";
import useRevealSelectedCards from "@/Hooks/useRevealSelectedCards";
import WikiObj from "@/Models/WikiObj";
import useStoreCardsToSession from "@/Hooks/useStoreCardsToSession";
import { cardsContainerService } from "@/Services/CardsContainerService";
import useIsFullScreen from "@/Hooks/useIsFullScreen";
import ReplaceAllCardsIcon from "./ReplaceAllCardsIcon";

type CardsContainerProps = {
  randomWords?: RandomWord[];
  cardsType: "RandomWord" | "WikiObj";
  isCaptain: boolean;
  isFamily?: boolean;
};

function CardsContainer(props: CardsContainerProps): JSX.Element {
  const [showCards, setShowCards] = useState<boolean[]>(Array(25).fill(false));
  const [cardStatus, setCardStatus] = useState<string[]>(Array(25).fill(""));

  const { session } = useGameContext();

  useStoreCardsToSession(
    props.cardsType,
    props.isCaptain,
    props.randomWords,
    props.isFamily
  );
  useDisplayCards(setShowCards, props.cardsType, props.isCaptain);

  useRevealSelectedCards(cardStatus, setCardStatus);
  const isFullScreen = useIsFullScreen();
  return (
    <div
      className={`relative grid h-max grid-cols-5 ${
        props.isCaptain
          ? isFullScreen
            ? "grid-rows-[repeat(5,12vh)] pt-8 "
            : "grid-rows-[repeat(5,12vh)] "
          : "grid-rows-[repeat(5,15vh)] pt-8 "
      } lg:gap-5 sm:gap-2 `}
    >
      {session.cards.length && !session.gameStarted && (
        <ReplaceAllCardsIcon
          wordType={props.cardsType}
          isFamily={props.isFamily}
        />
      )}
      {cardsContainerService.isCardsReadyToRender(
        props.cardsType,
        session.cards?.[0]
      ) &&
        session.cards.map((card, index) => {
          return (
            <GameCard
              key={
                props.cardsType === "RandomWord"
                  ? (card as RandomWord)?.id
                  : (card as WikiObj)?.pageid
              }
              index={index}
              showCard={showCards[index]}
              wordType={props.cardsType}
              isCaptain={props.isCaptain}
              isFamily={props.isFamily}
              team={session.teamAscription[index]}
              cardStatus={cardStatus[index]}
              setCardStatus={setCardStatus}
              word={session.cards[index]}
            />
          );
        })}
    </div>
  );
}

export default CardsContainer;
