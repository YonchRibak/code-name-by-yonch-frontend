import { Dispatch, SetStateAction, useEffect } from "react";

function useAdjustFontSize(
  valueLength: number,
  setAdjustedFontSize: Dispatch<SetStateAction<string>>,
  wordHasBeenReplaced: boolean
) {
  useEffect(() => {
    if (valueLength >= 60) {
      setAdjustedFontSize("lg:text-xl md:text-[0.625rem] sm:text-[0.5rem]");
    } else if (valueLength >= 50 && valueLength < 60) {
      setAdjustedFontSize("lg:text-xl md:text-[0.625rem] sm:text-[0.5rem]");
    } else if (valueLength >= 40 && valueLength < 50) {
      setAdjustedFontSize("lg:text-xl md:text-[0.625rem] sm:text-[0.5rem]");
    } else if (valueLength >= 35 && valueLength < 40) {
      setAdjustedFontSize("lg:text-xl md:text-[0.625rem] sm:text-[0.5rem]");
    } else if (valueLength >= 30 && valueLength < 35) {
      setAdjustedFontSize("lg:text-2xl md:text-sm sm:text-[0.625rem]");
    } else if (valueLength >= 25 && valueLength < 30) {
      setAdjustedFontSize("lg:text-2xl md:text-sm sm:text-[0.5rem]");
    } else if (valueLength >= 20 && valueLength < 25) {
      setAdjustedFontSize("lg:text-3xl md:text-md sm:text-[0.875rem]");
    } else if (valueLength >= 15 && valueLength < 20) {
      setAdjustedFontSize("lg:text-3xl md:text-md sm:text-sm");
    } else if (valueLength >= 10 && valueLength < 15) {
      setAdjustedFontSize("lg:text-3xl md:text-xl sm:text-sm");
    } else {
      setAdjustedFontSize("2xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg");
    }
  }, [wordHasBeenReplaced]);
}

export default useAdjustFontSize;
