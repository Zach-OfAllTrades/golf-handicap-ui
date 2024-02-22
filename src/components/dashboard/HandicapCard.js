import React from "react";
import MetricCard from "../organisms/card/MetricCard";
import { useHandicap } from "../../hooks/useHandicap";

const HandicapCard = () => {
  const { data, isLoading, isError } = useHandicap();

  return <MetricCard metric={data?.handicap} title="Handicap" />;
};

export default HandicapCard;
