/* eslint-disable @typescript-eslint/no-empty-function */
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
});

export default function T2Provider(props: React.PropsWithChildren) {
  const { children } = props;

  const {
    instances: publicUbuntuInstances,
    addInstance: addPublicUbuntuInstances,
    removeInstance: removePublicUbuntuInstances,
  } = useInstanceData();
  const {
    instances: publicCentosInstances,
    addInstance: addPublicCentosInstances,
    removeInstance: removePublicCentosInstances,
  } = useInstanceData();
  const {
    instances: privateUbuntuInstances,
    addInstance: addPrivateUbuntuInstances,
    removeInstance: removePrivateUbuntuInstances,
  } = useInstanceData();
  const {
    instances: privateCentosInstances,
    addInstance: addPrivateCentosInstances,
    removeInstance: removePrivateCentosInstances,
  } = useInstanceData();

  useEffect(() => {
    // TODO :: 초기 API 통신하여 state 관리
    // TODO :: 1. instance API
    // TODO :: 2. Public/Private, ubuntu/centos 4가지 분류하여 setState
    // TODO :: 3. 4가지 커스텀훅으로 분리하여 전달
  }, []);

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
      }}>
      {children}
    </T2Context.Provider>
  );
}
