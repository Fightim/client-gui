import { useQuery } from "react-query";

import { getRDSOption } from "../../../story/api/rds";
import { QUERY_KEY } from "./keys";

export const useFetchRDSOption = (id: string) => {
  const fetcher = () => getRDSOption(id);
  const { data } = useQuery([QUERY_KEY.option, id], fetcher);

  return {
    rdsOption: data,
  };
};
