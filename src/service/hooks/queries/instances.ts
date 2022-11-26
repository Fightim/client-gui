import { useMutation, useQuery, useQueryClient } from "react-query";
import { InstanceResponseDto } from "../../../store/types/responseDto";

import { createInstances, getInstanceOption, getInstances } from "../../../story/api/instances";
import useLoader from "../useLoader";
import { QUERY_KEY } from "./keys";

export const useFetchInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>(QUERY_KEY.get_instances, () => getInstances());

  return {
    instances: data,
  };
};

export const useFetchInstanceOption = (id: string) => {
  const { data } = useQuery([QUERY_KEY.option, id], () => getInstanceOption(id));

  return {
    instanceOption: data,
  };
};

export const useCreateInstancesMutation = () => {
  const queryClient = useQueryClient();
  const { showLoader, hideLoader } = useLoader();

  return useMutation(createInstances, {
    onSuccess() {
      queryClient.invalidateQueries(QUERY_KEY.get_instances);
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
  })
}