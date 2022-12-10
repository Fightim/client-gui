interface Option {
  name: string;
}

interface RDSOption {
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

interface RDSInformations {
  id: string | null;
  DBInstanceStatus: string | null;  //TODO :: creating, available, deleting enum값 설정
  endPoint: string | null;
  port: number | null;
  storage: number | null;
}

export interface InstanceResponseDto {
  options: Option;
  informations: InstanceInformations;
}

export interface LoadBalancerRsponseDto {
  options: Option;
  informations: LoadBalancerInformations;
}

export interface RDSRsponseDto {
  options: RDSOptions;
  informations: RDSInformations;
}
