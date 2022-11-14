import { useQuery } from "react-query";

import { getInstanceOption } from "../../../story/api/instances";
import { QUERY_KEY } from "./keys";

export const useFetchInstanceOption = (id: string) => {
  const fetcher = () => getInstanceOption(id);
  const { data } = useQuery([QUERY_KEY.option, id], fetcher);

  return {
    instanceOption: data,
  };
};
