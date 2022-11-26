interface Option {
  name: string;
}

interface RdsOption extends Option {
  masterUserName: string;
}

interface InstanceInformations {
  id: string;
  type: "t2.micro";
  os: "UBUNTU" | "CENTOS";
  tier: "WEBSERVER" | "WAS";
  publicIp: string | null;
  privateIp: string;
  securityGroup: string[];
  storageVolume: string;
  storageType: "SSD" | "HDD";
}

interface LoadBalancerInformations {
  id: string;
  domain: string;
  securityGroup: string[];
  targetGroupInstances: string[];
}

interface RdsInformations {
  endPoint: string;
  port: number;
  storage: string;
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
