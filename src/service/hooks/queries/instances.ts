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
  const { data } = useQuery<InstanceResponseDto>([QUERY_KEY.option, id], () => getInstanceOption(id));

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
      // TODO :: 서버 데이터 캐시 무효화 제대로 처리하기
      // TODO :: instances 4가지 데이터 비워주기 처리 필요
      window.location.reload();
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
  })
}