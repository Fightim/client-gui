import { useContext } from "react";

import { MySQLContext } from "../../context/MySQLContext";

export default function useMySQL() {
  const { instances, addInstance, removeInstance } = useContext(MySQLContext);

  return { instances, addInstance, removeInstance };
}
