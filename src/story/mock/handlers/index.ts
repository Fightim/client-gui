import { instancesHandler } from "./instances";
import { loadBalancersHandler } from "./loadBalancers";
import { rdsHandler } from "./rds";

export const handlers = [...instancesHandler, ...loadBalancersHandler, ...rdsHandler];
