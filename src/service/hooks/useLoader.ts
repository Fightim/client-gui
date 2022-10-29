import { useContext } from "react";

import { LoaderContext } from "../context/LoaderContext";

export default function useLoader() {
  const { showLoader, hideLoader } = useContext(LoaderContext);

  return {
    showLoader,
    hideLoader,
  };
}
