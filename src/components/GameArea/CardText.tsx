import { ReactNode, useState } from "react";
import "./GameArea.css";
import useAdjustFontSize from "@/Hooks/useAdjustFontSize";
import useManageTextLineBreaks from "@/Hooks/useManageTextLineBreaks";
import i18n from "@/i18n";
import { AnimatePresence, motion } from "framer-motion";

type CardTextProps = {
  children: ReactNode;
  wordHasBeenReplaced: boolean;
  valueLength: number;
  isCaptain: boolean;
  wordType?: string;
};

function CardText({
  children,
  wordHasBeenReplaced,
  valueLength,
  isCaptain,
  wordType,
}: CardTextProps): JSX.Element {
  const [textValue, setTextValue] = useState("");
  const [adjustedFontSize, setAdjustedFontSize] = useState("");

  useAdjustFontSize(valueLength, setAdjustedFontSize, wordHasBeenReplaced);

  useManageTextLineBreaks(
    // This custom hook manages text line breaks based on the word type and length
    children?.toString(),
    setTextValue,
    wordHasBeenReplaced
  );
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`
        h-auto w-full font-medium select-none sm:leading-tight whitespace-pre-line 
         ${adjustedFontSize}
        ${i18n.language === "en-US" ? "ltr " : "rtl "}
      `}
      >
        {isCaptain && wordType === "WikiObj" ? textValue : children}
      </motion.div>
    </AnimatePresence>
  );
}

export default CardText;
