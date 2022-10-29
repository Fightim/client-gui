import { useContext } from "react";

import { MySQLContext } from "../../context/MySQLContext";

export default function usePrivateCentos() {
  const { instances, addInstance, removeInstance } = useContext(MySQLContext);

  return { instances, addInstance, removeInstance };
}
