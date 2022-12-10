import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { RDSResponseDto } from "../../../store/types/responseDto";
import { createRDS, deleteRDS, getRDS, getRDSOption } from "../../../story/api/rds";
import useLoader from "../useLoader";
import { QUERY_KEY } from "./keys";

export const useFetchRDS = () => {
  const { data } = useQuery<RDSResponseDto[]>([QUERY_KEY.get_rds], () => getRDS(), {
    staleTime: 10000,
  });

  return {
    rds: data,
  };
};

export const useFetchRDSOption = (id: string) => {
  const { data } = useQuery<RDSResponseDto>([QUERY_KEY.option, id], () => getRDSOption(id));

  return {
    rdsOption: data,
  };
};

export const useCreatRDSsMutation = () => {
  const queryClient = useQueryClient();
  const { showLoader, hideLoader } = useLoader();

  return useMutation(createRDS, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.get_rds]);
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
    // TODO :: any 제거
    onError(error: any) {
      alert(error.response.data.message);
      location.reload();
    }
  })
}

export const useDeleteRDSMutation = () => {
  const queryClient = useQueryClient();
  const { showLoader, hideLoader } = useLoader();

  return useMutation(deleteRDS, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.get_rds]);
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
  })
}