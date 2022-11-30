import { createContext, useEffect } from "react";

import { InstanceContext } from "../../store/types/instanceContext";
import useInstanceData from "../hooks/instanceContext/instanceData/useInstanceData";

export const T2Context = createContext<InstanceContext>({
  publicUbuntuInstances: new Set(),
  addPublicUbuntuInstances: () => {},
  removePublicUbuntuInstances: () => {},
  publicCentosInstances: new Set(),
  addPublicCentosInstances: () => {},
  removePublicCentosInstances: () => {},
  privateUbuntuInstances: new Set(),
  addPrivateUbuntuInstances: () => {},
  removePrivateUbuntuInstances: () => {},
  privateCentosInstances: new Set(),
  addPrivateCentosInstances: () => {},
  removePrivateCentosInstances: () => {},
  resetCurrentInstances: () => {},
});

export default function T2Provider(props: React.PropsWithChildren) {
  const { children } = props;

  const {
    instances: publicUbuntuInstances,
    addInstance: addPublicUbuntuInstances,
    removeInstance: removePublicUbuntuInstances,
    resetInstance: resetPublicUbuntuInstances,
  } = useInstanceData();
  const {
    instances: publicCentosInstances,
    addInstance: addPublicCentosInstances,
    removeInstance: removePublicCentosInstances,
    resetInstance: resetPublicCentosInstances,
  } = useInstanceData();
  const {
    instances: privateUbuntuInstances,
    addInstance: addPrivateUbuntuInstances,
    removeInstance: removePrivateUbuntuInstances,
    resetInstance: resetPrivateUbuntuInstances,
  } = useInstanceData();
  const {
    instances: privateCentosInstances,
    addInstance: addPrivateCentosInstances,
    removeInstance: removePrivateCentosInstances,
    resetInstance: resetPrivateCentosInstances,
  } = useInstanceData();

  const resetCurrentInstances = () => {
    resetPublicUbuntuInstances();
    resetPublicCentosInstances();
    resetPrivateUbuntuInstances();
    resetPrivateCentosInstances();
  };

  return (
    <T2Context.Provider
      value={{
        publicUbuntuInstances,
        addPublicUbuntuInstances,
        removePublicUbuntuInstances,

        publicCentosInstances,
        addPublicCentosInstances,
        removePublicCentosInstances,

        privateUbuntuInstances,
        addPrivateUbuntuInstances,
        removePrivateUbuntuInstances,

        privateCentosInstances,
        addPrivateCentosInstances,
        removePrivateCentosInstances,

        resetCurrentInstances,
      }}>
      {children}
    </T2Context.Provider>
  );
}
