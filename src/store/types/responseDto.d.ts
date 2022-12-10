interface Option {
  name: string;
}

interface RdsOption {
  name: string | null;
  masterUserName: string | null;
}

export interface InstanceInformations {
  id: string;
  type: "t2.micro";
  os: "UBUNTU" | "CENTOS";
  tier: "WEBSERVER" | "WAS";
  publicIp: string | null;
  privateIp: string;
  securityGroup: string[];
}

interface LoadBalancerInformations {
  id: string;
  domain: string;
  securityGroup: string[];
  targetGroupInstances: string[];
}

interface RdsInformations {
  endPoint: string | null;
  port: number | null;
  storage: string | null;
}

export interface InstanceResponseDto {
  options: Option;
  informations: InstanceInformations;
}

export interface LoadBalancerRsponseDto {
  options: Option;
  informations: LoadBalancerInformations;
}

export interface RdsRsponseDto {
  options: RdsOptions;
  informations: RdsInformations;
}
