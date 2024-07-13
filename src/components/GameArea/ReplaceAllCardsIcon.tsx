import useGameContext from "@/Hooks/useGameContext";
import { cardService } from "@/Services/CardService";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useTranslation } from "react-i18next";

type ReplaceAllCardsIconProps = {
  wordType: string;
  isFamily?: boolean;
};

function ReplaceAllCardsIcon(props: ReplaceAllCardsIconProps): JSX.Element {
  const [popoverState, setPopoverState] = useState(false);
  const { session, setSession } = useGameContext();
  const { t } = useTranslation();
  return (
    <Popover
      open={popoverState}
      onOpenChange={(isOpen) => setPopoverState(isOpen)}
    >
      <PopoverTrigger
        className={`absolute -top-4 -left-4 cursor-pointer`}
        onMouseEnter={() => setPopoverState(true)}
        onMouseLeave={() => setPopoverState(false)}
      >
        <RefreshCcw
          onClick={() => {
            cardService.handleAllCardsReplacement(
              props.wordType,
              setSession,
              session,
              props.isFamily
            );
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        side="top"
        sideOffset={10}
        className="w-fit"
      >
        {t("gameCard.replaceAll")}
      </PopoverContent>
    </Popover>
  );
}

export default ReplaceAllCardsIcon;
