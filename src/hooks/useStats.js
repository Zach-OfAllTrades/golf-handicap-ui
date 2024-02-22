import React, {useState, useEffect} from "react";
import { getUserStats } from "../services/HandicapService";
import { getUserId } from "../temp_redux/reduxMock";

export const useStats = () => {
  const userId = getUserId();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await getUserStats(userId);

        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [userId]);

  return { data, isLoading, isError };
}