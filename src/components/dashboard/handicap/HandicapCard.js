import React from "react";
import MetricCard from "../../organisms/card/MetricCard";
import { useFetch } from "../../../hooks/useFetch";
import { FETCH_KEYS } from "../../../utils/general";

const HandicapCard = () => {
  const { data, isLoading, isError } = useFetch(FETCH_KEYS.HANDICAP);

  return <MetricCard main metric={data?.handicap} title="Handicap" trend={{change: "+.5", measurement: "month"}}/>;
};

export default HandicapCard;
