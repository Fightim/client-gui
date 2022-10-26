/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from "react";

import Loader from "../../screen/common/Loader";

export const LoaderContext = createContext({
  showLoader: () => {},
  hideLoader: () => {},
});

export default function LoaderProvider(props: React.PropsWithChildren) {
  const { children } = props;

  const [isLoader, setIsLoader] = useState(false);

  const showLoader = () => {
    setIsLoader(true);
  };

  const hideLoader = () => {
    setIsLoader(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {isLoader && <Loader />}
    </LoaderContext.Provider>
  );
}
