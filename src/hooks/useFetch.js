import React, {useState, useEffect} from "react";
import { getHandicap, getUserMetrics } from "../services/MetricService";
import { getUserId } from "../temp_redux/reduxMock";
import { FETCH_KEYS } from "../utils/general";
import { getRounds } from "../services/RoundService";
import { getCourses } from "../services/CourseService";

const FETCH_FUNCS = {
  [FETCH_KEYS.METRICS]: (userId) => getUserMetrics(userId), 
  [FETCH_KEYS.ROUNDS]: (userId) => getRounds(userId), 
  [FETCH_KEYS.COURSES]: (userId) => getCourses(userId), 
  [FETCH_KEYS.HANDICAP]: (userId) => getHandicap(userId), 
}

export const useFetch = (key) => {
  const userId = getUserId();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await FETCH_FUNCS[key](userId);

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
