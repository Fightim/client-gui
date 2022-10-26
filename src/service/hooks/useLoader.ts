import { useContext } from "react";

import { LoaderContext } from "../context/LoaderContext";

export const useLoader = () => {
  const { showLoader, hideLoader } = useContext(LoaderContext);

  return {
    showLoader,
    hideLoader,
  };
};
