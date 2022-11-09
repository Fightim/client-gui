import { useQuery } from "react-query";

import { getInstanceOption } from "../../../story/api/instances";

const QUERY_KEY = {
  option: "option",
};

export const useInstanceOption = (id: string) => {
  const { data } = useQuery([QUERY_KEY.option, id], () => getInstanceOption(id));

  return {
    instanceOption: data,
  };
};
