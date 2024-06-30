import RandomWord from "@/Models/randomWord";
import { useQuery } from "react-query";
import axios from "axios";
import { appConfig } from "@/Utils/appConfig";
import useGameContext from "./useGameContext";

function useGetWords(isFamily: boolean = false) {
  const { session } = useGameContext();
  const {
    data: randomWords,
    isLoading,
    isError,
    refetch, // in case there is a need to force useQuery to fetch new data entirely, rather than providing cached data.
  } = useQuery({
    queryKey: [
      `getRandomWords-${session.sessionId}-${isFamily ? "family" : "adults"}`,
    ],
    queryFn: fetchAndHandleData,
    staleTime: Infinity,
  });
  async function fetchData() {
    const res = await axios.get(appConfig.wordBankUrl);
    return res.data;
  }
  async function fetchAndHandleData() {
    const fetchedArr = await fetchData();

    if (isFamily) {
      // if isFamily is true, filter through and select only objects that have isFamily: true.
      return fetchedArr
        .filter((obj: RandomWord) => obj.isFamily === "True")
        .sort(() => Math.random() - 0.5); // sort the array randomly.
    }
    return fetchedArr.sort(() => Math.random() - 0.5); // if isFamily is false, sort the array randomly,
  }

  return { randomWords, isLoading, isError, refetch };
}

export default useGetWords;
