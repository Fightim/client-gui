import { useQuery } from "react-query";

import { getInstanceOption } from "../../../story/api/instances";
import { QUERY_KEY } from "./keys";

export const useFetchInstanceOption = (id: string) => {
  const { data } = useQuery([QUERY_KEY.option, id], () => getInstanceOption(id));

  return {
    instanceOption: data,
  };
};
