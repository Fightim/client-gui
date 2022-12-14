import { useContext } from "react";

import { T2Context } from "../../context/T2Context";

export default function usePublicUbuntu() {
  const { publicUbuntuInstances, addPublicUbuntuInstances, removePublicUbuntuInstances, resetCurrentInstances } = useContext(T2Context);

  return { publicUbuntuInstances, addPublicUbuntuInstances, removePublicUbuntuInstances, resetCurrentInstances };
}
