import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { InstanceResponseDto } from "../../../store/types/responseDto";

import { createInstances, deleteInstances, getInstanceOption, getInstances } from "../../../story/api/instances";
import useLoader from "../useLoader";
import { QUERY_KEY } from "./keys";

export const useFetchPublicUbuntuInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>([QUERY_KEY.get_instances, QUERY_KEY.public_ubuntu], () => getInstances(), {
    staleTime: 10000,
    select: data => data.filter(instance => instance.informations.os === "UBUNTU" && instance.informations.tier === "WEBSERVER")
  });

  return {
    instances: data,
  };
};

export const useFetchPublicCentosInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>([QUERY_KEY.get_instances, QUERY_KEY.public_centos], () => getInstances(), {
    staleTime: 10000,
    select: data => data.filter(instance => instance.informations.os === "CENTOS" && instance.informations.tier === "WEBSERVER")
  });

  return {
    instances: data,
  };
};

export const useFetchPrivateUbuntuInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>([QUERY_KEY.get_instances, QUERY_KEY.private_ubuntu], () => getInstances(), {
    staleTime: 10000,
    select: data => data.filter(instance => instance.informations.os === "UBUNTU" && instance.informations.tier === "WAS")
  });

  return {
    instances: data,
  };
};

export const useFetchPrivateCentosInstances = () => {
  const { data } = useQuery<InstanceResponseDto[]>([QUERY_KEY.get_instances, QUERY_KEY.private_centos], () => getInstances(), {
    staleTime: 10000,
    select: data => data.filter(instance => instance.informations.os === "CENTOS" && instance.informations.tier === "WAS")
  });

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
      queryClient.invalidateQueries([QUERY_KEY.get_instances]);
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
    onError(error: Error | AxiosError) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
        location.reload();
      }
    }
  })
}

export const useDeleteInstancesMutation = () => {
  const queryClient = useQueryClient();
  const { showLoader, hideLoader } = useLoader();

  return useMutation(deleteInstances, {
    onSuccess() {
      queryClient.invalidateQueries([QUERY_KEY.get_instances]);
    },
    onMutate() {
      showLoader();
    },
    onSettled() {
      hideLoader();
    },
    onError(error: Error | AxiosError) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
        location.reload();
      }
    }
  })
}