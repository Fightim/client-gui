import { createContext, useEffect } from "react";

import { InstanceContext } from "../../store/types/instanceContext";
import useInstanceData from "../hooks/instanceContext/instanceData/useInstanceData";
import { useFetchInstances } from "../hooks/queries/instances";

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

  const { instances } = useFetchInstances();
  useEffect(() => {
    instances?.forEach((instance) => {
      const postInstance = {
        id: instance.informations.id,
        type: instance.informations.type,
        os: instance.informations.os,
        tier: instance.informations.tier,
        name: instance.options.name,
      };
      if (instance.informations.os === "UBUNTU" && instance.informations.tier === "WEBSERVER") {
        return addPublicUbuntuInstances(postInstance);
      }
      if (instance.informations.os === "CENTOS" && instance.informations.tier === "WEBSERVER") {
        return addPublicCentosInstances(postInstance);
      }
      if (instance.informations.os === "UBUNTU" && instance.informations.tier === "WAS") {
        return addPrivateUbuntuInstances(postInstance);
      }
      if (instance.informations.os === "CENTOS" && instance.informations.tier === "WAS") {
        return addPrivateCentosInstances(postInstance);
      }
    });
  }, [instances]);

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
