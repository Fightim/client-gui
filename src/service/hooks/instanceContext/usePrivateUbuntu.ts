import { useContext } from "react";

import { T2Context } from "../../context/T2Context";

export default function usePrivateUbuntu() {
  const { privateUbuntuInstances, addPrivateUbuntuInstances, removePrivateUbuntuInstances } = useContext(T2Context);

  return { privateUbuntuInstances, addPrivateUbuntuInstances, removePrivateUbuntuInstances };
}
