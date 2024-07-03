import { Dispatch, SetStateAction, useEffect } from "react";

function useAdjustFontSize(
  valueLength: number,
  setAdjustedFontSize: Dispatch<SetStateAction<string>>,
  wordHasBeenReplaced: boolean
) {
  useEffect(() => {
    if (valueLength >= 60) {
      setAdjustedFontSize(
        "xl:text-md lg:text-sm md:text-[0.625rem] sm:text-[0.5rem]"
      );
    } else if (valueLength >= 50 && valueLength < 60) {
      setAdjustedFontSize(
        "xl:text-lg lg:text-sm md:text-[0.8rem] sm:text-[0.5rem]"
      );
    } else if (valueLength >= 40 && valueLength < 50) {
      setAdjustedFontSize(
        "xl:text-xl lg:text-md md:text-[1rem] sm:text-[0.5rem]"
      );
    } else if (valueLength >= 35 && valueLength < 40) {
      setAdjustedFontSize("xl:text-xl lg:text-lg md:text-xs sm:text-[0.5rem]");
    } else if (valueLength >= 30 && valueLength < 35) {
      setAdjustedFontSize(
        "xl:text-2xl lg:text-xl md:text-xs sm:text-[0.625rem]"
      );
    } else if (valueLength >= 25 && valueLength < 30) {
      setAdjustedFontSize("xl:text-2xl lg:text-xl md:text-xs sm:text-[0.5rem]");
    } else if (valueLength >= 20 && valueLength < 25) {
      setAdjustedFontSize(
        "xl:text-3xl lg:text-2xl md:text-xs sm:text-[0.875rem]"
      );
    } else if (valueLength >= 15 && valueLength < 20) {
      setAdjustedFontSize("xl:text-3xl lg:text-2xl md:text-xs sm:text-sm");
    } else if (valueLength >= 10 && valueLength < 15) {
      setAdjustedFontSize("xl:text-3xl lg:text-2xl md:text-xs sm:text-sm");
    } else {
      setAdjustedFontSize("xl:text-4xl lg:text-2xl md:text-2xl sm:text-lg");
    }
  }, [wordHasBeenReplaced]);
}

export default useAdjustFontSize;
